import React from "react";
import axios from "axios";
import { useState } from "react";
import mockData from "./mockData";

const Payload = () => {
  // This is related to the Project Metadata
  const [groupId, setGroupId] = useState("com.tse");
  const [artifactId, setArtifactId] = useState("sample");
  const [name, setName] = useState(artifactId);
  const [description, setDescription] = useState(
    "Sample project by TSE initializer"
  );
  const [packageName, setPackageName] = useState("com.tse.sample");

  //THESE USESTATES ARE FOR PROJECT CONFIGURATION
  const [buildType, setBuildType] = useState("maven");
  const [language, setLanguage] = useState("java");
  const [springBootVersion, setSpringBootVersion] = useState("3.1.3");
  const [packaging, setPackaging] = useState("jar");
  const [javaVersion, setJavaVersion] = useState("20");

  //THESE USESTATES ARE FOR PROJECT DEPENDENCIES
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [dependencies, setDependencies] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRelatedItems, setSelectedRelatedItems] = useState([]);
  const [customDependencies, setCustomDependencies] = useState("");

  const handleGroupIdChange = (e) => {
    setGroupId(e.target.value);
    generatePackageName(e.target.value, artifactId);
  };

  const handleArtifactIdChange = (e) => {
    setArtifactId(e.target.value);
    // automatically changes the value in name field when the value in artifact field is changed
    setName(e.target.value); //
    generatePackageName(groupId, e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handledescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const generatePackageName = (groupId, artifactId) => {
    const formattedGroupId = groupId.replace(/\s+/g, "-").toLowerCase();
    const formattedArtifactId = artifactId.replace(/\s+/g, "-").toLowerCase();
    const generatedPackageName = `${formattedGroupId}.${formattedArtifactId}`;
    setPackageName(generatedPackageName);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      // Clear the results when the search bar is empty
      setResults([]);
    } else {
      // Filter and display modules that include the query
      const filteredResults = mockData.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);

      // Clear related search suggestions when searching
      setSelectedRelatedItems([]);
    }
  };
//this is the code where the logic for selecting and deselecting the dependency in implemeted

  const handleSelect = (event, item, source) => {
    event.preventDefault(); // Prevent form submission
  
    const isSelected =
      source === "results"
        ? selectedItems.some((selectedItem) => selectedItem.id === item.id)
        : selectedRelatedItems.some(
            (selectedItem) => selectedItem.id === item.id
          );
  
    if (isSelected) {
      if (source === "results") {
        setSelectedItems(
          selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
        );
      } else {
        setSelectedRelatedItems(
          selectedRelatedItems.filter(
            (selectedItem) => selectedItem.id !== item.id
          )
        );
      }
  
      // Remove the xml value from xmlData
      setDependencies((prevXmlData) => {
        const updatedXmlData = { ...prevXmlData };
        delete updatedXmlData[item.id];
        return updatedXmlData;
      });
    } else {
      if (source === "results") {
        setSelectedItems([...selectedItems, item]);
      } else {
        setSelectedRelatedItems([...selectedRelatedItems, item]);
      }
  
      // Add the xml value to xmlData
      setDependencies((prevXmlData) => {
        return {
          ...prevXmlData,
          [item.id]: item.xml,
        };
      });
    }
  };
  

  //THIS IS RELATED TO THE PROJECT Dependencies

  const handleCustomDependenciesChange = (e) => {
    setCustomDependencies(e.target.value);
  };

  //This function manages the submission of data
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate the form data here before proceeding with the request
    if (!groupId || !artifactId || !name || !buildType || !dependencies) {
      console.error("Please fill in all required fields.");
      return;
    }
  
    try {
      // Extract data based on buildType
      let extractedData;
      if (buildType === "maven") {
        extractedData = selectedItems.map((item) => item.xml);
      } else {
        extractedData = selectedItems.map((item) => item.implementation);
      }
  
      // Create the payload data
      const payloadData = {
        groupId,
        artifactId,
        name,
        description,
        packageName,
        buildType,
        language,
        springBootVersion,
        packaging,
        javaVersion,
        dependencies: extractedData,
        customDependencies,
      };
  
      console.log(payloadData);
  
      // Make the POST request
      const response = await axios.post(
        "http://localhost:8080/api/generate",
        payloadData,
        {
          responseType: "blob",
        }
      );
  
      // Create a Blob object from the response data
      const blob = new Blob([response.data], { type: "application/zip" });
  
      // Create a download link for the Blob
      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.download = payloadData.artifactId + ".zip";
  
      // Trigger a click event on the download link to initiate the download
      downloadLink.click();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  
  return (
    <div className="main flex  rounded-lg justify-center w-4/5 ">
      <form
        className="payload_form justify-center w-full flex -4 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="the_form flex w-full rounded-lg  justify-around  ">
          {/* rounded left conrners here */}
          <div className="combine flex flex-1 flex-col bg-[#1d1f22]  rounded-l-lg ">
            <div className=" text-white p-8   ">
              {/* THE PROJECT METADATA SECTION STARTS HERE */}

              <h2 className="bg-blue-500 w-[160px] px-2 py-2 font-semibold mb-4 text-center rounded-lg">
                Project Metadata
              </h2>
              <div className="metadata ml-6 mr-6 flex-col ">
                {/* Group Id Starts Here */}
                <div className="flex items-center  mb-6">
                  <label className="w-1/6 mr-4 text-sm font-medium">
                    Group ID:
                  </label>
                  <input
                    type="text"
                    className="flex-1 px-3 py-2  rounded-lg bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    value={groupId}
                    onChange={handleGroupIdChange}
                  />
                </div>
                {/* Group Id Ends Here */}

                {/* Artifact Id Starts Here */}

                <div className="flex items-center mb-6">
                  <label className="w-1/6 mr-4 text-sm font-medium">
                    Artifact ID:
                  </label>
                  <input
                    type="text"
                    className="flex-1 px-3 py-2  rounded-lg bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    value={artifactId}
                    onChange={handleArtifactIdChange}
                  />
                </div>

                {/* Artifact Id Ends Here */}

                {/* Name Starts Here */}

                <div className="flex items-center mb-6">
                  <label className="w-1/6 mr-4 text-sm font-medium">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="flex-1 px-3 py-2  rounded-lg bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>

                {/* Name Ends Here */}

                {/* Description Starts Here */}

                <div className="flex items-center mb-6">
                  <label className="w-1/6 mr-4 text-sm font-medium">
                    Description:
                  </label>
                  <input
                    type="text"
                    className="flex-1 px-3 py-2  rounded-lg bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    value={description}
                    onChange={handledescriptionChange}
                  />
                </div>

                {/* Description Ends Here */}

                {/* Package Id Starts Here */}

                <div className="flex items-center mb-6">
                  <label className="w-1/6 mr-4 text-sm font-medium ">
                    Package Name:
                  </label>
                  <input
                    type="text"
                    className="flex-1 px-3 py-2  rounded-lg bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    value={packageName}
                    readOnly
                  />
                </div>
                {/* Package Id Ends Here */}
              </div>
            </div>

            {/* Project Metadata Ends Here */}

            {/* THIS ARE THE FORM FIELDS FOR PROJECT CONFIGURATION */}

            <div className=" text-white p-8 ">
              <h2 className="bg-blue-500 w-[180px] py-2 font-semibold mb-4 text-center rounded-lg">
                Project Configuration
              </h2>

              {/* Build Type Starts Here */}

              <div className="mb-4  items-center  flex">
                <label className="block mt-2 mb-2 w-1/5 items-center font-medium text-gray-300  ">
                  Build Type :
                </label>
                <div className="flex  space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="maven"
                      checked={buildType === "maven"}
                      onChange={() => setBuildType("maven")}
                      className="mr-2"
                    />
                    Maven
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="gradle"
                      checked={buildType === "gradle"}
                      onChange={() => setBuildType("gradle")}
                      className="mr-2"
                    />
                    Gradle 
                  </label>
                </div>
              </div>
              {/* Build Type Ends Here */}

              {/* Language Starts Here */}
              <div className="mb-4 flex">
                <label className="block mb-2 w-1/5 font-medium text-gray-300 -2 -green-800</div>">
                  Language:
                </label>
                <div className="flex space-x-4 ">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="java"
                      checked={language === "java"}
                      onChange={() => setLanguage("java")}
                      className="mr-2"
                    />
                    Java
                  </label>
                </div>
              </div>
              {/* Language Ends Here */}

              {/* Spring Boot Version Starts Here */}

              <div className="mb-4 flex">
                <label className="block w-1/5 mb-2 font-medium text-gray-300">
                  Spring Boot :
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="3.1.3"
                      checked={springBootVersion === "3.1.3"}
                      onChange={() => setSpringBootVersion("3.1.3")}
                      className="mr-2"
                    />
                    3.1.3
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="3.0.10"
                      checked={springBootVersion === "3.0.10"}
                      onChange={() => setSpringBootVersion("3.0.10")}
                      className="mr-2"
                    />
                    3.0.10
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="2.7.15"
                      checked={springBootVersion === "2.7.15"}
                      onChange={() => setSpringBootVersion("2.7.15")}
                      className="mr-2"
                    />
                    2.7.15
                  </label>
                </div>
              </div>

              {/* Spring Boot Version Ends Here */}

              {/* Packaging Type Starts Here */}
              <div className="mb-4 flex">
                <label className="block w-1/5 mb-2 font-medium text-gray-300">
                  Package
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="jar"
                      checked={packaging === "jar"}
                      onChange={() => setPackaging("jar")}
                      className="mr-2"
                    />
                    jar
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="war"
                      checked={packaging === "war"}
                      onChange={() => setPackaging("war")}
                      className="mr-2"
                    />
                    war
                  </label>
                </div>
              </div>

              {/* Packaging Type Ends Here */}

              {/* Java Version */}
              <div className="mb-4 flex">
                <label className="block w-1/5 mb-2 font-medium text-gray-300">
                  Java Version:
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="20"
                      checked={javaVersion === "20"}
                      onChange={() => setJavaVersion("20")}
                      className="mr-2"
                    />
                    20
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="17"
                      checked={javaVersion === "17"}
                      onChange={() => setJavaVersion("17")}
                      className="mr-2"
                    />
                    17
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="11"
                      checked={javaVersion === "11"}
                      onChange={() => setJavaVersion("11")}
                      className="mr-2"
                    />
                    11
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="8"
                      checked={javaVersion === "8"}
                      onChange={() => setJavaVersion("8")}
                      className="mr-2"
                    />
                    8
                  </label>
                </div>
              </div>

              {/* Java Version Ends Here */}
            </div>

            {/* Project Configuration Ends Here */}
          </div>

          {/* THIS ARE THE FORM FIELDS FOR DEPENDENCIES */}

          <div className="dependency-main  w-2/5   ">
            <div className="bg-[#1d1f22] h-full  text-white p-8  shadow-lg rounded-r-lg">
              {/* The Add Dependencies Starts Here */}
              {/* <div className="bg-[#1d1f22] p-4 rounded-lg  h-3/4 border-2 border-red-400 shadow-md"> */}
              <h1 className="text-xl   mb-2 md:mb-4">Search Dependencies</h1>
              <div className="mb-2 md:flex md:items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full md:w-auto px-3 py-2 rounded-lg bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-700 text-white mb-2 md:mb-0"
                />
                <button
                  onClick={handleSearch}
                  className="mt-2 md:mt-0 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-700 md:ml-2"
                >
                  Search
                </button>
              </div>
              {results.length > 0 && (
                <div className="mb-4">
                  <p className="text-gray-400">Search Results:</p>
                  <ul className="max-h-48 overflow-y-auto mt-2">
                    {results.map((item) => (
                      <li
                        key={item.id}
                        className="mb-2 bg-gray-700 p-2 rounded-lg shadow"
                      >
                        <div className="text-white  mb-2 font-semibold">
                          {item.name}
                        </div>
                        {item.description}
                        <button
                          onClick={(event) =>
                            handleSelect(event, item, "results")
                          }
                          className="ml-2 bg-blue-500 text-white mb-2 px-2 py-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-700"
                        >
                          {selectedItems.some(
                            (selectedItem) => selectedItem.id === item.id
                          )
                            ? "Deselect"
                            : "Select"}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {query.trim() === "" &&
                selectedItems.length === 0 &&
                selectedRelatedItems.length === 0 && (
                  <p className="mt-2 md:mt-4 text-gray-400"></p>
                )}
              {(selectedItems.length > 0 ||
                selectedRelatedItems.length > 0) && (
                <div>
                  <h2 className="text-xl md:text-xl  mt-2 md:mt-4">
                    Selected Items:
                  </h2>
                  <ul className="mt-2 max-h-24 overflow-y-auto">
                    {selectedItems.map((item) => (
                      <li
                        key={item.id}
                        className="bg-gray-700 mb-2 md:mb-4 p-2 rounded-lg shadow flex justify-between items-center"
                      >
                        {item.name}
                        <button
                          onClick={(event) =>
                            handleSelect(event, item, "results")
                          }
                          className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-gray-700"
                        >
                          Deselect
                        </button>
                      </li>
                    ))}
                    {selectedRelatedItems.map((item) => (
                      <li
                        key={item.id}
                        className="bg-gray-800 mb-2 md:mb-4 p-2 rounded-lg shadow flex justify-between items-center"
                      >
                        {item.name}
                        <button
                          onClick={(event) =>
                            handleSelect(event, item, "relatedSearches")
                          }
                          className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-gray-700"
                        >
                          Deselect
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* </div> */}

              {/* The Add Dependencies Ends Here */}

              {/* Cusotom Dependencies Start Here */}
              <div className="my-4">
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Custom Dependencies (XML format):
                </label>
                <textarea
                  className="w-full h-20 px-3 py-2  rounded-lg bg-gray-700 text-white focus:outline-none focus:-[#161B22]"
                  value={customDependencies}
                  onChange={handleCustomDependenciesChange}
                />
              </div>
              {/* Cusotom Dependencies Ends Here */}

              {/* Button Starts Here */}
              <button
                type="submit"
                className=" px-4 items-end py-2 bg-blue-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
              >
                Create Project
              </button>
              {/* Button Ends Here */}
            </div>
          </div>
        </div>
      </form>

    </div>
  );
};

export default Payload;
