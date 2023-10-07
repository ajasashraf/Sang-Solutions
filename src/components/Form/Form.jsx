import React from "react";

const Form = () => {
  return (
    <div>
      <section className="bg-blueGray-50">
        <h1 className="w-full px-4 mx-auto mt-3 font-bold uppercase">
          Incident Report
        </h1>
        <div className="w-full px-4 mx-auto mt-1">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="flex-auto px-4 lg:px-12 py-10 pt-0">
              <form>
                <h6 className="text-gray-600 text-sm mt-3 mb-6 font-bold uppercase">
                  Report Originated By:
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-3/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-500 text-sm font-semibold mb-2"
                        htmlfor="grid-password"
                      >
                        Project
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-80 ease-linear transition-all duration-150"
                        placeholder="Project"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12 ">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-500 text-sm font-semibold mb-2"
                        htmlfor="grid-password"
                      >
                        Location of Incident
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-80 ease-linear transition-all duration-150"
                        placeholder="Location"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12 ">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-500 text-sm font-semibold mb-2"
                        htmlfor="incident-date"
                      >
                        Date of Incident
                      </label>
                      <input
                        type="date"
                        id="incident-date"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-80 ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-500 text-sm font-semibold mb-2"
                        htmlfor="incident-time"
                      >
                        Incident Time
                      </label>
                      <input
                        type="time"
                        id="incident-time"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-80 ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-500 text-sm font-semibold mb-2"
                        htmlFor="incident-type"
                      >
                        Incident Type
                      </label>
                      <select
                        id="incident-type"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-80 ease-linear transition-all duration-150"
                      >
                        <option value="" disabled selected>
                          (Incident Type)
                        </option>
                        <option value="Near Miss">Near Miss</option>
                        <option value="First Aid Case">First Aid Case</option>
                        <option value="Restricted Work">Restricted Work</option>
                        <option value="Medically Treated">
                          Medically Treated
                        </option>
                        <option value="Lost Time Injury">
                          Lost Time Injury
                        </option>
                        <option value="Fatality">Fatality</option>
                        <option value="Occupational Illness">
                          Occupational Illness
                        </option>
                        <option value="Asset Damage">Asset Damage</option>
                        <option value="Environmental Damage">
                          Environmental Damage
                        </option>
                        <option value="Traffic Accident">
                          Traffic Accident
                        </option>
                        <option value="Roll Over">Roll Over</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-500 text-sm font-semibold mb-2"
                        htmlFor="incident-type"
                      >
                        Severity Rate
                      </label>
                      <select
                        id="incident-type"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-80 ease-linear transition-all duration-150"
                        defaultValue=""
                      >
                        <option value="" disabled selected>
                          (Severity Rate)
                        </option>
                        <option value="Catastrophic">Catastrophic</option>
                        <option value="Major">Major</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Minor">Minor</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full lg:w-3/12 ">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-500 text-sm font-semibold mb-2"
                        htmlFor="incident-type"
                      >
                        Potential Rate
                      </label>
                      <select
                        id="incident-type"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-80 ease-linear transition-all duration-150"
                        defaultValue=""
                      >
                        <option value="" disabled selected>
                          (Potential Rate)
                        </option>
                        <option value="Rare">Rare</option>
                        <option value="Unlikely">Unlikely</option>
                        <option value="Possible">Possible</option>
                        <option value="Likely">Likely</option>
                        <option value="Almost Certain">Almost Certain</option>
                      </select>
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-gray-600 text-sm mt-3 mb-6 font-bold uppercase">
                  Details:
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-3/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-500 text-sm font-semibold mb-2"
                        htmlfor="grid-password"
                      >
                        Description of Incident
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-10/12 ease-linear transition-all duration-150"
                        rows={4}
                        placeholder="Description..."
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-500 text-sm font-semibold mb-2"
                        htmlfor="grid-password"
                      >
                        Description of Damage
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-10/12 ease-linear transition-all duration-150"
                        rows={4}
                        placeholder="Description..."
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-500 text-sm font-semibold mb-2"
                        htmlfor="grid-password"
                      >
                        Number of person injured
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-10/12 ease-linear transition-all duration-150"
                        placeholder="Number"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-500 text-sm font-semibold mb-2"
                        htmlfor="grid-password"
                      >
                        Name of injured people and details of injuries
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-10/12 ease-linear transition-all duration-150"
                        rows={4}
                        placeholder="Description..."
                      />
                    </div>
                  </div>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                <h6 className="text-gray-600 text-sm mt-3 mb-6 font-bold uppercase">
                  The following for low potential incidents
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-500 text-sm font-semibold mb-2"
                        htmlfor="grid-password"
                      >
                        Immediate Causes
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder=" Immediate Causes"
                      />
                    </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-500 text-sm font-semibold mb-2"
                        htmlfor="grid-password"
                      >
                        Underlying Causes
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-full text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Underlying Causes"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
