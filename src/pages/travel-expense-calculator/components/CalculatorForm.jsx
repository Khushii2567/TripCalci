import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import GroupSizeInput from './GroupSizeInput';
import TripDurationInput from './TripDurationInput';
import LocationSelect from './LocationSelect';

const CalculatorForm = ({ onCalculate, onReset, isCalculating }) => {
  const [formData, setFormData] = useState({
    groupSize: 2,
    days: 3,
    source: '',
    destination: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.groupSize || formData?.groupSize < 1) {
      newErrors.groupSize = 'Group size must be at least 1';
    }

    if (!formData?.days || formData?.days < 1) {
      newErrors.days = 'Trip duration must be at least 1 day';
    }

    if (!formData?.source) {
      newErrors.source = 'Please select a source location';
    }

    if (!formData?.destination) {
      newErrors.destination = 'Please select a destination';
    }

    if (formData?.source === formData?.destination && formData?.source) {
      newErrors.destination = 'Destination must be different from source';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      onCalculate(formData);
    }
  };

  const handleReset = () => {
    setFormData({
      groupSize: 2,
      days: 3,
      source: '',
      destination: ''
    });
    setErrors({});
    onReset();
  };

  const handleGeolocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation?.getCurrentPosition(
        (position) => {
          // Mock setting current location to New York for demo
          setFormData(prev => ({ ...prev, source: 'new-york' }));
        },
        (error) => {
          console.error('Geolocation error:', error);
          // Fallback to New York
          setFormData(prev => ({ ...prev, source: 'new-york' }));
        }
      );
    }
  };

  // Auto-calculate when form is valid
  useEffect(() => {
    if (formData?.groupSize && formData?.days && formData?.source && formData?.destination && formData?.source !== formData?.destination) {
      const timer = setTimeout(() => {
        onCalculate(formData);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [formData, onCalculate]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <GroupSizeInput
        value={formData?.groupSize}
        onChange={(value) => setFormData(prev => ({ ...prev, groupSize: value }))}
        error={errors?.groupSize}
      />
      <TripDurationInput
        value={formData?.days}
        onChange={(value) => setFormData(prev => ({ ...prev, days: value }))}
        error={errors?.days}
      />
      <LocationSelect
        label="Source Location"
        value={formData?.source}
        onChange={(value) => setFormData(prev => ({ ...prev, source: value }))}
        error={errors?.source}
        placeholder="Where are you traveling from?"
        showGeolocation
        onGeolocationClick={handleGeolocationClick}
      />
      <LocationSelect
        label="Destination"
        value={formData?.destination}
        onChange={(value) => setFormData(prev => ({ ...prev, destination: value }))}
        error={errors?.destination}
        placeholder="Where are you going?"
      />
      <div className="flex space-x-3 pt-4">
        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isCalculating}
          iconName="Calculator"
          iconPosition="left"
        >
          Calculate Trip Cost
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={handleReset}
          iconName="RotateCcw"
          className="px-4"
        />
      </div>
    </form>
  );
};

export default CalculatorForm;