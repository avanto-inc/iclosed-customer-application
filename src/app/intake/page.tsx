"use client";

import { useState } from "react";
import { Home, Briefcase, FileText, Check, Repeat } from "lucide-react";
import Image from "next/image";

export default function ServiceSelection() {
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedClosingOption, setSelectedClosingOption] = useState<string | null>(null);

  const [step, setStep] = useState<number>(1);
  const [purchasePrice, setPurchasePrice] = useState("");
  const services = [
    {
      id: "closing",
      title: "Property Closing",
      description:
        "Buying or selling a property? We'll guide you through the legal process—start to finish, and beyond.",
      icon: Home,
    },
    {
      id: "refinance",
      title: "Mortgage Refinance",
      description:
        "Changing your current mortgage? Count on us to handle the legal side, smoothly and efficiently.",
      icon: Briefcase,
    },
    {
      id: "condo",
      title: "Condo Status Certificate Report",
      description:
        "Closing on a condo? We'll review your status certificate thoroughly—at no extra charge.",
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="px-8 py-6">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="iClosed Logo"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow flex items-center justify-center px-6">
        {step === 1 && (
          <>
            <div className="max-w-7xl w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-16">

              {/* Heading */}
              <div className="mb-16">
                <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
                  How can we assist you today?
                </h1>
                <p className="mt-4 text-lg text-gray-500 leading-relaxed max-w-2xl">
                  Let's start by selecting the service you need so we can get things moving.
                </p>
              </div>

              {/* Stacked Services */}
              <div className="space-y-8">
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelected(service.id)}
                      className={`cursor-pointer rounded-2xl border p-8 flex items-start gap-8
          ${selected === service.id
                          ? "border-[#C10007] shadow-xl"
                          : "border-gray-200 hover:shadow-lg "
                        }
        `}
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                          <Icon size={30} className="text-[#C10007]" strokeWidth={1.8} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                        <p className="mt-4 text-gray-500 leading-relaxed max-w-xl">
                          {service.description}
                        </p>
                      </div>

                      {/* Selection Indicator */}
                      <div className="flex items-start pt-2">
                        <div
                          className={`h-6 w-6 rounded-full border flex items-center justify-center transition-all duration-300
              ${selected === service.id
                              ? "border-red-600 bg-[#C10007]"
                              : "border-gray-300"
                            }
            `}
                        >
                          {selected === service.id && <Check size={14} className="text-white" strokeWidth={3} />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>


              {selected === "closing" && (
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      id: "buy",
                      icon: Home,
                      title: "I am buying a property",
                      description: "You're buying a property? We'll handle the legal steps to complete your purchase securely.",
                      price: "$1029",
                    },
                    {
                      id: "sell",
                      icon: FileText,
                      title: "I am selling a property",
                      description: "Selling a property? We'll prepare your documents and manage the legal side of your sale.",
                      price: "$1029",
                    },
                    {
                      id: "both",
                      icon: Repeat,
                      title: "I am buying AND selling a property",
                      description: "Doing both? iClosed will coordinate both ends to ensure a smooth and connected closing.",
                      price: "$1999",
                    },
                  ].map((card) => {
                    const Icon = card.icon;
                    const isSelected = selectedClosingOption === card.id;

                    return (
                      <div
                        key={card.id}
                        onClick={() => setSelectedClosingOption(card.id)}
                        className={`
            cursor-pointer rounded-2xl p-6 transition-all duration-300 transform
            ${isSelected
                            ? "bg-white border-2 border-[#C10007] shadow-lg "
                            : "bg-gray-50 border border-gray-200 hover:shadow-md hover:-translate-y-0.5"
                          }
          `}
                      >
                        {/* Icon in Circle */}
                        <div
                          className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300
              ${isSelected
                              ? "bg-gradient-to-tr from-[#FF6B6B] to-[#C10007] text-white"
                              : "bg-red-50 text-[#C10007]"
                            }
            `}
                        >
                          <Icon size={28} strokeWidth={2} />
                        </div>

                        {/* Content */}
                        <h4 className={`text-lg font-semibold mb-2 transition-colors duration-300
            ${isSelected ? "text-[#C10007]" : "text-gray-900"}`}
                        >
                          {card.title}
                        </h4>
                        <p className={`text-gray-500 mb-4 ${isSelected ? "text-gray-700" : ""}`}>
                          {card.description}
                        </p>
                        <span className={`font-bold text-xl transition-colors duration-300
            ${isSelected ? "text-[#C10007]" : "text-gray-900"}`}
                        >
                          {card.price}
                        </span>{" "}
                        + Disbursements
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Button */}
              <div className="flex justify-end mt-16">
                <button
                  disabled={!selected || (selected === "closing" && !selectedClosingOption)}
                  onClick={() => setStep(2)}
                  className={`px-10 py-3 rounded-sm text-base font-medium transition-all duration-300
    ${selected && (selected !== "closing" || selectedClosingOption)
                      ? "bg-[#C10007] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <div className="mt-12 w-full max-w-7xl mx-auto bg-white rounded-2xl border border-red-100 p-12 shadow-sm">
            <h1 className="text-3xl font-semibold mb-6">
              Enter the purchase price for the property.
            </h1>

            <label className="block font-medium mb-2">Purchase Price</label>
            <input
              type="text"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              placeholder="$ 1,250,000"
              className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <div className="flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 bg-gray-200 rounded-sm font-medium hover:bg-gray-300 cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!purchasePrice}
                className={`px-6 py-2 rounded-sm font-medium transition
    ${purchasePrice
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
            <div className="w-full max-w-7xl bg-white border border-gray-200 rounded-2xl p-10 shadow-lg">

              {/* Header */}
              <div className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  Enter the Purchase Property Address
                </h1>
                <p className="text-gray-500 mt-2 text-sm">
                  (iClosed currently only serves Ontario)
                </p>
              </div>

              {/* Form */}
              <div className="space-y-6">

                {/* Street Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="Start typing your address..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Unit/Apartment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unit / Apartment / Suite Number
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Toronto"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                {/* Postal Code + Province */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      placeholder="A1C 2B3"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Province
                    </label>
                    <select
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      defaultValue="Ontario"
                    >
                      <option>Ontario</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-10">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-300 transition"
                >
                  Previous
                </button>

                <button
                  className="px-8 py-3 bg-red-600 text-white rounded-sm font-medium hover:bg-red-700 transition"
                >
                  Next
                </button>
              </div>

            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        iClosed ©2025
      </footer>
    </div>
  );
}