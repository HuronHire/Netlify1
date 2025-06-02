import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "../hooks/use-toast";
import { apiRequest } from "../lib/queryClient";
import type { InsertInquiry } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    equipment: '',
    startDate: '',
    finishDate: '',
    projectDetails: ''
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await apiRequest('POST', '/api/inquiries', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours with a competitive quote.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        equipment: '',
        startDate: '',
        finishDate: '',
        projectDetails: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again or call us directly.",
        variant: "destructive",
      });
      console.error('Form submission error:', error);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Quote
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you with a competitive quote
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Equipment Required *
                </label>
                <select
                  name="equipment"
                  value={formData.equipment}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select equipment type</option>
                  <option value="electric-scissor-lifts">Electric Scissor Lifts</option>
                  <option value="rough-terrain-scissor-lifts">Rough Terrain Scissor Lifts</option>
                  <option value="boom-lifts">Boom Lifts</option>
                  <option value="plant-trailers">Plant Trailers</option>
                  <option value="multiple">Multiple Equipment Types</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <Input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Finish Date *
                  </label>
                  <Input
                    type="date"
                    name="finishDate"
                    value={formData.finishDate}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={mutation.isPending}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              >
                {mutation.isPending ? 'Sending...' : 'Send Quote Request'}
              </Button>
            </form>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3">📞</span>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">0418 959 338</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3">✉️</span>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">hire@huronhire.com.au</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3">📍</span>
                    <div>
                      <p className="font-medium text-gray-900">Service Area</p>
                      <p className="text-gray-600">Perth Metro & Surrounding Areas</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-3">🕒</span>
                    <div>
                      <p className="font-medium text-gray-900">Business Hours</p>
                      <p className="text-gray-600">Mon-Fri: 7AM-5PM</p>
                      <p className="text-gray-600">Saturday: 8AM-12PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Quick Response Guarantee</h3>
                <p className="text-blue-800">
                  We typically respond to quote requests within 2-4 hours during business hours. 
                  For urgent requirements, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}