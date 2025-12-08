import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

interface GatherRequirementsFormValues {
  businessName: string;
  contactEmail: string;
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial requirements data from API
    const fetchRequirements = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
        setRequirements(response.data);
      } catch (err) {
        setError('Failed to load requirements. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = async (data) => {
    try {
      setLoading(true);
      setError(null);

      // Send data to backend API
      await axios.post('https://api.example.com/submit-requirements', data);
      
      alert('Your requirements have been submitted successfully!');
    } catch (err) {
      setError('Failed to submit your requirements. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Gather Requirements</h1>
      {error && <p role="alert" className="bg-red-50 text-red-800 p-2 rounded">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="businessName" className="block mb-1">Business Name</label>
          <input
            type="text"
            id="businessName"
            {...register('businessName', { required: 'This field is required' })}
            className={clsx(
              "w-full px-3 py-2 border rounded",
              errors.businessName && "border-red-500 focus:border-red-500"
            )}
          />
          <p className="text-red-500">{errors.businessName?.message}</p>
        </div>

        <div>
          <label htmlFor="contactEmail" className="block mb-1">Contact Email</label>
          <input
            type="email"
            id="contactEmail"
            {...register('contactEmail', { required: 'This field is required' })}
            className={clsx(
              "w-full px-3 py-2 border rounded",
              errors.contactEmail && "border-red-500 focus:border-red-500"
            )}
          />
          <p className="text-red-500">{errors.contactEmail?.message}</p>
        </div>

        {requirements.map((requirement) => (
          <div key={requirement.id} className="mb-4">
            <label htmlFor={`requirement-${requirement.id}`} className="block mb-1">{requirement.name}</label>
            <textarea
              id={`requirement-${requirement.id}`}
              {...register(`requirements[${requirement.id - 1}].description`, { required: 'This field is required' })}
              rows={4}
              className={clsx(
                "w-full px-3 py-2 border rounded",
                errors.requirements?.[requirement.id - 1]?.description && "border-red-500 focus:border-red-500"
              )}
            />
            <p className="text-red-500">{errors.requirements?.[requirement.id - 1]?.description?.message}</p>
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className={clsx(
            "w-full bg-blue-500 text-white py-2 rounded",
            loading && "opacity-50 cursor-not-allowed"
          )}
        >
          {loading ? 'Submitting...' : 'Submit Requirements'}
        </button>
      </form>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Requirement {
  id: number;
  name: string;
  description: string;
}

interface GatherRequirementsFormValues {
  businessName: string;
  contactEmail: string;
  requirements: Requirement[];
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial requirements data from API
    const fetchRequirements = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
        setRequirements(response.data);
      } catch (err) {
        setError('Failed to load requirements. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm<GatherRequirementsFormValues>();

  const onSubmit: SubmitHandler<GatherRequirementsFormValues> = async (data) => {
    try {
      setLoading(true);
      setError(null);

      // Send data to backend API
      await axios.post('https://api.example.com/submit-requirements', data);
      
      alert('Your requirements have been submitted successfully!');
    } catch (err) {
      setError('Failed to submit your requirements. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Gather Requirements</h1>
      {error && <p role="alert" className="bg-red-50 text-red-800 p-2 rounded">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="businessName" className="block mb-1">Business Name</label>
          <input
            type="text"
            id="businessName"
            {...register('businessName', { required: 'This field is required' })}
            className={clsx(
              "w-full px-3 py-2 border rounded",
              errors.businessName && "border-red-500 focus:border-red-500"
            )}
          />
          <p className="text-red-500">{errors.businessName?.message}</p>
        </div>

        <div>
          <label htmlFor="contactEmail" className="block mb-1">Contact Email</label>
          <input
            type="email"
            id="contactEmail"
            {...register('contactEmail', { required: 'This field is required' })}
            className={clsx(
              "w-full px-3 py-2 border rounded",
              errors.contactEmail && "border-red-500 focus:border-red-500"
            )}
          />
          <p className="text-red-500">{errors.contactEmail?.message}</p>
        </div>

        {requirements.map((requirement) => (
          <div key={requirement.id} className="mb-4">
            <label htmlFor={`requirement-${requirement.id}`} className="block mb-1">{requirement.name}</label>
            <textarea
              id={`requirement-${requirement.id}`}
              {...register(`requirements[${requirement.id - 1}].description`, { required: 'This field is required' })}
              rows={4}
              className={clsx(
                "w-full px-3 py-2 border rounded",
                errors.requirements?.[requirement.id - 1]?.description && "border-red-500 focus:border-red-500"
              )}
            />
            <p className="text-red-500">{errors.requirements?.[requirement.id - 1]?.description?.message}</p>
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className={clsx(
            "w-full bg-blue-500 text-white py-2 rounded",
            loading && "opacity-50 cursor-not-allowed"
          )}
        >
          {loading ? 'Submitting...' : 'Submit Requirements'}
        </button>
      </form>
    </div>
  );
};

export default GatherRequirements;