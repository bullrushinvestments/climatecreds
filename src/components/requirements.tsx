import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { css } from 'twin.macro';

interface IFormInputs {
  name: string;
  email: string;
  contentCategory: string;
  targetAudience: string;
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null); // Clear any previous error
      setLoading(false); // Reset loading state
    }, 1000);
  };

  const onError = () => {
    setError("An unexpected error occurred. Please try again later.");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} css={tw`p-8 bg-white rounded-lg shadow-md w-full max-w-sm mx-auto flex flex-col items-center`}>
      {error && <div tw="text-red-500 mb-4">{error}</div>}
      <label htmlFor="name" tw="block text-gray-700 text-sm font-bold mb-2">Name</label>
      <input type="text" id="name" {...register("name", { required: "Name is required" })} tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
      {errors.name && <p tw="text-red-500 text-xs italic mt-1">{errors.name.message}</p>}

      <label htmlFor="email" tw="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input type="email" id="email" {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })} tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
      {errors.email && <p tw="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}

      <label htmlFor="contentCategory" tw="block text-gray-700 text-sm font-bold mb-2">Content Category</label>
      <select id="contentCategory" {...register("contentCategory", { required: "Please select a content category" })} tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
        <option value="">Select...</option>
        <option value="news">News</option>
        <option value="blog">Blog</option>
        <option value="tutorial">Tutorial</option>
      </select>
      {errors.contentCategory && <p tw="text-red-500 text-xs italic mt-1">{errors.contentCategory.message}</p>}

      <label htmlFor="targetAudience" tw="block text-gray-700 text-sm font-bold mb-2">Target Audience</label>
      <select id="targetAudience" {...register("targetAudience", { required: "Please select a target audience" })} tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
        <option value="">Select...</option>
        <option value="general">General</option>
        <option value="tech">Tech Enthusiasts</option>
        <option value="education">Education</option>
      </select>
      {errors.targetAudience && <p tw="text-red-500 text-xs italic mt-1">{errors.targetAudience.message}</p>}

      <button type="submit" disabled={loading} tw={css`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'cursor-not-allowed opacity-50' : ''}`}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { css } from 'twin.macro';

interface IFormInputs {
  name: string;
  email: string;
  contentCategory: string;
  targetAudience: string;
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null); // Clear any previous error
      setLoading(false); // Reset loading state
    }, 1000);
  };

  const onError = () => {
    setError("An unexpected error occurred. Please try again later.");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} css={tw`p-8 bg-white rounded-lg shadow-md w-full max-w-sm mx-auto flex flex-col items-center`}>
      {error && <div tw="text-red-500 mb-4">{error}</div>}
      <label htmlFor="name" tw="block text-gray-700 text-sm font-bold mb-2">Name</label>
      <input type="text" id="name" {...register("name", { required: "Name is required" })} tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
      {errors.name && <p tw="text-red-500 text-xs italic mt-1">{errors.name.message}</p>}

      <label htmlFor="email" tw="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input type="email" id="email" {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" } })} tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" />
      {errors.email && <p tw="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}

      <label htmlFor="contentCategory" tw="block text-gray-700 text-sm font-bold mb-2">Content Category</label>
      <select id="contentCategory" {...register("contentCategory", { required: "Please select a content category" })} tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
        <option value="">Select...</option>
        <option value="news">News</option>
        <option value="blog">Blog</option>
        <option value="tutorial">Tutorial</option>
      </select>
      {errors.contentCategory && <p tw="text-red-500 text-xs italic mt-1">{errors.contentCategory.message}</p>}

      <label htmlFor="targetAudience" tw="block text-gray-700 text-sm font-bold mb-2">Target Audience</label>
      <select id="targetAudience" {...register("targetAudience", { required: "Please select a target audience" })} tw="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
        <option value="">Select...</option>
        <option value="general">General</option>
        <option value="tech">Tech Enthusiasts</option>
        <option value="education">Education</option>
      </select>
      {errors.targetAudience && <p tw="text-red-500 text-xs italic mt-1">{errors.targetAudience.message}</p>}

      <button type="submit" disabled={loading} tw={css`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'cursor-not-allowed opacity-50' : ''}`}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default GatherRequirements;