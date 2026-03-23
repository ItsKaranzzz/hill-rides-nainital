'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../lib/supabase';

interface BookingFormData {
  name: string;
  phone: string;
  rentalType: 'rider' | 'self-drive';
  pickupLocation: string;
  dropLocation?: string;
  date: string;
  duration: number;
}

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rentalType, setRentalType] = useState<'rider' | 'self-drive'>('self-drive');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<BookingFormData>();

  const watchedRentalType = watch('rentalType');

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      // Save to Supabase (when configured)
      console.log('Booking data:', data);

      // For now, just log to console as requested
      alert('Booking submitted successfully! We will contact you soon.');

      // Reset form
      reset();
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('There was an error submitting your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Book Your Scooty</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: 'Please enter a valid 10-digit Indian phone number'
              }
            })}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>
          )}
        </div>

        {/* Rental Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Rental Type *
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="relative">
              <input
                type="radio"
                value="rider"
                {...register('rentalType', { required: 'Please select a rental type' })}
                className="sr-only peer"
                onChange={() => setRentalType('rider')}
              />
              <div className="p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/50 transition-colors">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Ride with Rider</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Professional rider included</div>
                </div>
              </div>
            </label>

            <label className="relative">
              <input
                type="radio"
                value="self-drive"
                {...register('rentalType', { required: 'Please select a rental type' })}
                className="sr-only peer"
                defaultChecked
                onChange={() => setRentalType('self-drive')}
              />
              <div className="p-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/50 transition-colors">
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Self-Drive</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Drive yourself</div>
                </div>
              </div>
            </label>
          </div>
          {errors.rentalType && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.rentalType.message}</p>
          )}
        </div>

        {/* Pickup Location */}
        <div>
          <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Pickup Location *
          </label>
          <input
            type="text"
            id="pickupLocation"
            {...register('pickupLocation', { required: 'Pickup location is required' })}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Enter pickup location"
          />
          {errors.pickupLocation && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.pickupLocation.message}</p>
          )}
        </div>

        {/* Drop Location (only for ride with rider) */}
        {watchedRentalType === 'rider' && (
          <div>
            <label htmlFor="dropLocation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Drop Location *
            </label>
            <input
              type="text"
              id="dropLocation"
              {...register('dropLocation', { required: 'Drop location is required for ride with rider' })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              placeholder="Enter drop location"
            />
            {errors.dropLocation && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.dropLocation.message}</p>
            )}
          </div>
        )}

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Pickup Date *
          </label>
          <input
            type="date"
            id="date"
            {...register('date', { required: 'Date is required' })}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.date.message}</p>
          )}
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Duration (Days) *
          </label>
          <select
            id="duration"
            {...register('duration', { required: 'Duration is required', valueAsNumber: true })}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          >
            <option value="">Select duration</option>
            <option value={1}>1 Day</option>
            <option value={2}>2 Days</option>
            <option value={3}>3 Days</option>
            <option value={4}>4 Days</option>
            <option value={5}>5 Days</option>
            <option value={6}>6 Days</option>
            <option value={7}>7 Days</option>
          </select>
          {errors.duration && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.duration.message}</p>
          )}
        </div>

        {/* Razorpay Payment Button Placeholder */}
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-3">
            💳 Payment Integration (Razorpay Placeholder)
          </p>
          <button
            type="button"
            onClick={() => alert('Razorpay integration will be implemented here')}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Pay with Razorpay (₹{watch('duration') ? (watch('duration') * 250) : 0})
          </button>
          <p className="text-xs text-yellow-600 dark:text-yellow-300 mt-2">
            Note: This is a placeholder button. Actual Razorpay integration will be added later.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-lg disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Book Now'}
        </button>
      </form>
    </div>
  );
}
