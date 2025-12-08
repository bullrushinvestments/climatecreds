import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface TestFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().min(10, 'Description must be at least 10 characters').max(500, 'Description cannot exceed 500 characters')
  });

  const formik = useFormik<TestFormValues>({
    initialValues: {
      title: '',
      description: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      try {
        // API call to create a test
        await fetch('/api/create-test', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        });

        formik.resetForm();
      } catch (err) {
        setError('Failed to submit the form. Please try again later.');
      }

      setLoading(false);
    }
  });

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter test title..."
            className={`w-full px-3 py-2 border rounded ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
          />
          {formik.touched.title && formik.errors.title ? (
            <div role="alert" aria-live="assertive" className="text-red-500">{formik.errors.title}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter test description..."
            rows={4}
            className={`w-full px-3 py-2 border rounded ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
          />
          {formik.touched.description && formik.errors.description ? (
            <div role="alert" aria-live="assertive" className="text-red-500">{formik.errors.description}</div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface TestFormValues {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().min(10, 'Description must be at least 10 characters').max(500, 'Description cannot exceed 500 characters')
  });

  const formik = useFormik<TestFormValues>({
    initialValues: {
      title: '',
      description: ''
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);

      try {
        // API call to create a test
        await fetch('/api/create-test', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        });

        formik.resetForm();
      } catch (err) {
        setError('Failed to submit the form. Please try again later.');
      }

      setLoading(false);
    }
  });

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col items-center">
      {error && <p role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter test title..."
            className={`w-full px-3 py-2 border rounded ${formik.touched.title && formik.errors.title ? 'border-red-500' : ''}`}
          />
          {formik.touched.title && formik.errors.title ? (
            <div role="alert" aria-live="assertive" className="text-red-500">{formik.errors.title}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter test description..."
            rows={4}
            className={`w-full px-3 py-2 border rounded ${formik.touched.description && formik.errors.description ? 'border-red-500' : ''}`}
          />
          {formik.touched.description && formik.errors.description ? (
            <div role="alert" aria-live="assertive" className="text-red-500">{formik.errors.description}</div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;