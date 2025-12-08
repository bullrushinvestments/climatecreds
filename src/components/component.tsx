import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface BusinessSpecForm {
  businessName: string;
  description: string;
  contactEmail: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<BusinessSpecForm>();

  const onSubmit: SubmitHandler<BusinessSpecForm> = async (data) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Business specification created successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Create Business Specification</h2>
      {error && <p role="alert" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="businessName" className="block mb-1">Business Name</label>
          <input
            id="businessName"
            type="text"
            placeholder="Enter business name"
            {...register('businessName', { required: 'This field is required' })}
            aria-invalid={errors.businessName ? true : undefined}
            aria-describedby={errors.businessName ? 'business-name-error' : undefined}
            className={twMerge(
              "w-full px-3 py-2 border rounded",
              errors.businessName && "border-red-500"
            )}
          />
          {errors.businessName && (
            <p id="business-name-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.businessName.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            placeholder="Enter business description"
            {...register('description', { required: 'This field is required' })}
            aria-invalid={errors.description ? true : undefined}
            aria-describedby={errors.description ? 'business-description-error' : undefined}
            className={twMerge(
              "w-full px-3 py-2 border rounded",
              errors.description && "border-red-500"
            )}
          />
          {errors.description && (
            <p id="business-description-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="contactEmail" className="block mb-1">Contact Email</label>
          <input
            id="contactEmail"
            type="email"
            placeholder="Enter contact email"
            {...register('contactEmail', { required: 'This field is required' })}
            aria-invalid={errors.contactEmail ? true : undefined}
            aria-describedby={errors.contactEmail ? 'business-email-error' : undefined}
            className={twMerge(
              "w-full px-3 py-2 border rounded",
              errors.contactEmail && "border-red-500"
            )}
          />
          {errors.contactEmail && (
            <p id="business-email-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.contactEmail.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={twMerge(
            "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
            loading && "opacity-50 cursor-not-allowed"
          )}
        >
          {loading ? 'Creating...' : 'Create Specification'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface BusinessSpecForm {
  businessName: string;
  description: string;
  contactEmail: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<BusinessSpecForm>();

  const onSubmit: SubmitHandler<BusinessSpecForm> = async (data) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Business specification created successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Create Business Specification</h2>
      {error && <p role="alert" className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="businessName" className="block mb-1">Business Name</label>
          <input
            id="businessName"
            type="text"
            placeholder="Enter business name"
            {...register('businessName', { required: 'This field is required' })}
            aria-invalid={errors.businessName ? true : undefined}
            aria-describedby={errors.businessName ? 'business-name-error' : undefined}
            className={twMerge(
              "w-full px-3 py-2 border rounded",
              errors.businessName && "border-red-500"
            )}
          />
          {errors.businessName && (
            <p id="business-name-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.businessName.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            placeholder="Enter business description"
            {...register('description', { required: 'This field is required' })}
            aria-invalid={errors.description ? true : undefined}
            aria-describedby={errors.description ? 'business-description-error' : undefined}
            className={twMerge(
              "w-full px-3 py-2 border rounded",
              errors.description && "border-red-500"
            )}
          />
          {errors.description && (
            <p id="business-description-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="contactEmail" className="block mb-1">Contact Email</label>
          <input
            id="contactEmail"
            type="email"
            placeholder="Enter contact email"
            {...register('contactEmail', { required: 'This field is required' })}
            aria-invalid={errors.contactEmail ? true : undefined}
            aria-describedby={errors.contactEmail ? 'business-email-error' : undefined}
            className={twMerge(
              "w-full px-3 py-2 border rounded",
              errors.contactEmail && "border-red-500"
            )}
          />
          {errors.contactEmail && (
            <p id="business-email-error" role="alert" className="mt-1 text-sm text-red-600">
              {errors.contactEmail.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={twMerge(
            "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
            loading && "opacity-50 cursor-not-allowed"
          )}
        >
          {loading ? 'Creating...' : 'Create Specification'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;