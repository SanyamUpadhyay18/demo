// // // import { useState } from 'react';
// // // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// // // import 'bootstrap/dist/css/bootstrap.min.css';
// // // import './App.css';
// // // import Dashboard from './components/Dashboard';
// // // import InstalledKits from './components/Installedkits';

// // // function App() {
// // //   const [substationData, setSubstationData] = useState({
// // //     gss: '', mvFeeder: '', gisLocation: '', dtName: '', mKitSerialNo: ''
// // //   });

// // //   const [totalLVFeeders, setTotalLVFeeders] = useState(1);
// // //   const [lvFeeders, setLvFeeders] = useState([
// // //     { id: 1, name: '', ampacity: '', gisLocation: '' }
// // //   ]);

// // //   const [installerName, setInstallerName] = useState('');
// // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // //   const [locationLoading, setLocationLoading] = useState({ substation: false, feeders: {} });

// // //   const handleGetSubstationLocation = () => {
// // //     if (!navigator.geolocation) {
// // //       alert('Geolocation is not supported by your browser');
// // //       return;
// // //     }

// // //     setLocationLoading({ ...locationLoading, substation: true });

// // //     navigator.geolocation.getCurrentPosition(
// // //       (position) => {
// // //         const { latitude, longitude } = position.coords;
// // //         const locationString = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
// // //         setSubstationData({ ...substationData, gisLocation: locationString });
// // //         setLocationLoading({ ...locationLoading, substation: false });
// // //       },
// // //       (error) => {
// // //         alert(`Error getting location: ${error.message}`);
// // //         setLocationLoading({ ...locationLoading, substation: false });
// // //       },
// // //       { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
// // //     );
// // //   };

// // //   const handleGetFeederLocation = (index) => {
// // //     if (!navigator.geolocation) {
// // //       alert('Geolocation is not supported by your browser');
// // //       return;
// // //     }

// // //     setLocationLoading({ ...locationLoading, feeders: { ...locationLoading.feeders, [index]: true } });

// // //     navigator.geolocation.getCurrentPosition(
// // //       (position) => {
// // //         const { latitude, longitude } = position.coords;
// // //         const locationString = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
// // //         handleLVFeederChange(index, 'gisLocation', locationString);
// // //         setLocationLoading({ ...locationLoading, feeders: { ...locationLoading.feeders, [index]: false } });
// // //       },
// // //       (error) => {
// // //         alert(`Error getting location: ${error.message}`);
// // //         setLocationLoading({ ...locationLoading, feeders: { ...locationLoading.feeders, [index]: false } });
// // //       },
// // //       { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
// // //     );
// // //   };

// // //   const handleLVFeederCountChange = (e) => {
// // //     const count = parseInt(e.target.value) || 1;
// // //     setTotalLVFeeders(count);
    
// // //     const newFeeders = [];
// // //     for (let i = 0; i < count; i++) {
// // //       newFeeders.push(lvFeeders[i] || { id: i + 1, name: '', ampacity: '', gisLocation: '' });
// // //     }
// // //     setLvFeeders(newFeeders);
// // //   };

// // //   const handleLVFeederChange = (index, field, value) => {
// // //     const updatedFeeders = [...lvFeeders];
// // //     updatedFeeders[index][field] = value;
// // //     setLvFeeders(updatedFeeders);
// // //   };

// // //   const handleSubstationChange = (field, value) => {
// // //     setSubstationData({ ...substationData, [field]: value });
// // //   };

// // //   const validateData = () => {
// // //     if (!substationData.gss || !substationData.mvFeeder || !substationData.gisLocation ||
// // //         !substationData.dtName || !substationData.mKitSerialNo) {
// // //       alert('Please fill all Substation details!');
// // //       return false;
// // //     }

// // //     const gisPattern = /^-?\d+\.?\d*,\s*-?\d+\.?\d*$/;
// // //     if (!gisPattern.test(substationData.gisLocation)) {
// // //       alert('Invalid GIS Location format for Substation! Use format: latitude, longitude');
// // //       return false;
// // //     }

// // //     for (let i = 0; i < lvFeeders.length; i++) {
// // //       const feeder = lvFeeders[i];
// // //       if (!feeder.name || !feeder.ampacity || !feeder.gisLocation) {
// // //         alert(`Please fill all details for LV Feeder ${i + 1}!`);
// // //         return false;
// // //       }
// // //       if (!gisPattern.test(feeder.gisLocation)) {
// // //         alert(`Invalid GIS Location format for LV Feeder ${i + 1}!`);
// // //         return false;
// // //       }
// // //     }

// // //     if (!installerName.trim()) {
// // //       alert('Please enter Installer Name!');
// // //       return false;
// // //     }

// // //     return true;
// // //   };

// // //   const handleCompleteSubmit = async (e) => {
// // //     e.preventDefault();

// // //     if (!validateData()) return;

// // //     setIsSubmitting(true);

// // //     const payload = { substationData, lvFeeders, installerName };

// // //     try {
// // //       const response = await fetch('http://localhost:5000/api/installations', {
// // //         method: 'POST',
// // //         headers: { 'Content-Type': 'application/json' },
// // //         body: JSON.stringify(payload),
// // //       });

// // //       const result = await response.json();

// // //       if (result.success) {
// // //         alert(`✅ Installation Successful!\n\nM.Kit Serial No: ${result.data.mkitSerialNo}\nTotal LV Feeders: ${result.data.totalLVFeeders}`);
        
// // //         setSubstationData({ gss: '', mvFeeder: '', gisLocation: '', dtName: '', mKitSerialNo: '' });
// // //         setLvFeeders([{ id: 1, name: '', ampacity: '', gisLocation: '' }]);
// // //         setTotalLVFeeders(1);
// // //         setInstallerName('');
// // //       } else {
// // //         alert(`❌ Error: ${result.message}`);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error submitting data:', error);
// // //       alert('❌ Error submitting data. Please check if the server is running!');
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   return (
// // //     <Router>
// // //       <div className="app-container">
// // //         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
// // //           <div className="container-fluid">
// // //             <Link className="navbar-brand fw-bold" to="/">⚡ Installer Application</Link>
// // //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
// // //               <span className="navbar-toggler-icon"></span>
// // //             </button>
// // //             <div className="collapse navbar-collapse" id="navbarNav">
// // //               <ul className="navbar-nav ms-auto">
// // //                 <li className="nav-item"><Link className="nav-link" to="/">Dashboard</Link></li>
// // //                 <li className="nav-item"><Link className="nav-link" to="/installed-kits">Installed Meter Kits</Link></li>
// // //                 <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
// // //                 <li className="nav-item"><a className="nav-link" href="#">Logout</a></li>
// // //               </ul>
// // //             </div>
// // //           </div>
// // //         </nav>

// // //         <Routes>
// // //           <Route path="/" element={
// // //             <Dashboard 
// // //               substationData={substationData}
// // //               handleSubstationChange={handleSubstationChange}
// // //               handleGetSubstationLocation={handleGetSubstationLocation}
// // //               locationLoading={locationLoading}
// // //               totalLVFeeders={totalLVFeeders}
// // //               handleLVFeederCountChange={handleLVFeederCountChange}
// // //               lvFeeders={lvFeeders}
// // //               handleLVFeederChange={handleLVFeederChange}
// // //               handleGetFeederLocation={handleGetFeederLocation}
// // //               installerName={installerName}
// // //               setInstallerName={setInstallerName}
// // //               handleCompleteSubmit={handleCompleteSubmit}
// // //               isSubmitting={isSubmitting}
// // //             />
// // //           } />
// // //           <Route path="/installed-kits" element={<InstalledKits />} />
// // //         </Routes>

// // //         <footer className="bg-dark text-white text-center py-3 mt-4">
// // //           <p className="mb-0">© 2025 Meter Kit Installer Portal | Built with React + Bootstrap + PostgreSQL</p>
// // //         </footer>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;
// // import { useState } from 'react';
// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './App.css';
// // import Dashboard from './components/Dashboard';
// // import InstalledKits from './components/InstalledKits';

// // function App() {
// //   const [substationData, setSubstationData] = useState({
// //     gss: '', mvFeeder: '', gisLocation: '', dtName: '', mKitSerialNo: ''
// //   });

// //   const [totalLVFeeders, setTotalLVFeeders] = useState(1);
// //   const [lvFeeders, setLvFeeders] = useState([
// //     { id: 1, name: '', ampacity: '', gisLocation: '' }
// //   ]);

// //   const [installerName, setInstallerName] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [locationLoading, setLocationLoading] = useState({ substation: false, feeders: {} });

// //   // API URL - will use environment variable or fallback to localhost
// //   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// //   const handleGetSubstationLocation = () => {
// //     if (!navigator.geolocation) {
// //       alert('Geolocation is not supported by your browser');
// //       return;
// //     }

// //     setLocationLoading({ ...locationLoading, substation: true });

// //     navigator.geolocation.getCurrentPosition(
// //       (position) => {
// //         const { latitude, longitude } = position.coords;
// //         const locationString = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
// //         setSubstationData({ ...substationData, gisLocation: locationString });
// //         setLocationLoading({ ...locationLoading, substation: false });
// //       },
// //       (error) => {
// //         alert(`Error getting location: ${error.message}`);
// //         setLocationLoading({ ...locationLoading, substation: false });
// //       },
// //       { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
// //     );
// //   };

// //   const handleGetFeederLocation = (index) => {
// //     if (!navigator.geolocation) {
// //       alert('Geolocation is not supported by your browser');
// //       return;
// //     }

// //     setLocationLoading({ 
// //       ...locationLoading, 
// //       feeders: { ...locationLoading.feeders, [index]: true } 
// //     });

// //     navigator.geolocation.getCurrentPosition(
// //       (position) => {
// //         const { latitude, longitude } = position.coords;
// //         const locationString = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
// //         handleLVFeederChange(index, 'gisLocation', locationString);
// //         setLocationLoading({ 
// //           ...locationLoading, 
// //           feeders: { ...locationLoading.feeders, [index]: false } 
// //         });
// //       },
// //       (error) => {
// //         alert(`Error getting location: ${error.message}`);
// //         setLocationLoading({ 
// //           ...locationLoading, 
// //           feeders: { ...locationLoading.feeders, [index]: false } 
// //         });
// //       },
// //       { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
// //     );
// //   };

// //   const handleLVFeederCountChange = (e) => {
// //     const count = parseInt(e.target.value) || 1;
// //     setTotalLVFeeders(count);
    
// //     const newFeeders = [];
// //     for (let i = 0; i < count; i++) {
// //       newFeeders.push(lvFeeders[i] || { id: i + 1, name: '', ampacity: '', gisLocation: '' });
// //     }
// //     setLvFeeders(newFeeders);
// //   };

// //   const handleLVFeederChange = (index, field, value) => {
// //     const updatedFeeders = [...lvFeeders];
// //     updatedFeeders[index][field] = value;
// //     setLvFeeders(updatedFeeders);
// //   };

// //   const handleSubstationChange = (field, value) => {
// //     setSubstationData({ ...substationData, [field]: value });
// //   };

// //   const validateData = () => {
// //     if (!substationData.gss || !substationData.mvFeeder || !substationData.gisLocation ||
// //         !substationData.dtName || !substationData.mKitSerialNo) {
// //       alert('Please fill all Substation details!');
// //       return false;
// //     }

// //     const gisPattern = /^-?\d+\.?\d*,\s*-?\d+\.?\d*$/;
// //     if (!gisPattern.test(substationData.gisLocation)) {
// //       alert('Invalid GIS Location format for Substation! Use format: latitude, longitude');
// //       return false;
// //     }

// //     for (let i = 0; i < lvFeeders.length; i++) {
// //       const feeder = lvFeeders[i];
// //       if (!feeder.name || !feeder.ampacity || !feeder.gisLocation) {
// //         alert(`Please fill all details for LV Feeder ${i + 1}!`);
// //         return false;
// //       }
// //       if (!gisPattern.test(feeder.gisLocation)) {
// //         alert(`Invalid GIS Location format for LV Feeder ${i + 1}!`);
// //         return false;
// //       }
// //     }

// //     if (!installerName.trim()) {
// //       alert('Please enter Installer Name!');
// //       return false;
// //     }

// //     return true;
// //   };

// //   const handleCompleteSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!validateData()) return;

// //     setIsSubmitting(true);

// //     const payload = { substationData, lvFeeders, installerName };

// //     try {
// //       const response = await fetch(`${API_URL}/api/installations`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify(payload),
// //       });

// //       const result = await response.json();

// //       if (result.success) {
// //         alert(`✅ Installation Successful!\n\nM.Kit Serial No: ${result.data.mkitSerialNo}\nTotal LV Feeders: ${result.data.totalLVFeeders}`);
        
// //         setSubstationData({ gss: '', mvFeeder: '', gisLocation: '', dtName: '', mKitSerialNo: '' });
// //         setLvFeeders([{ id: 1, name: '', ampacity: '', gisLocation: '' }]);
// //         setTotalLVFeeders(1);
// //         setInstallerName('');
// //       } else {
// //         alert(`❌ Error: ${result.message}`);
// //       }
// //     } catch (error) {
// //       console.error('Error submitting data:', error);
// //       alert('❌ Error submitting data. Please check if the server is running!');
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <Router>
// //       <div className="app-container">
// //         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
// //           <div className="container-fluid">
// //             <Link className="navbar-brand fw-bold" to="/">⚡ Installer Application</Link>
// //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
// //               <span className="navbar-toggler-icon"></span>
// //             </button>
// //             <div className="collapse navbar-collapse" id="navbarNav">
// //               <ul className="navbar-nav ms-auto">
// //                 <li className="nav-item"><Link className="nav-link" to="/">Dashboard</Link></li>
// //                 <li className="nav-item"><Link className="nav-link" to="/installed-kits">Installed Meter Kits</Link></li>
// //                 <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
// //                 <li className="nav-item"><a className="nav-link" href="#">Logout</a></li>
// //               </ul>
// //             </div>
// //           </div>
// //         </nav>

// //         <Routes>
// //           <Route path="/" element={
// //             <Dashboard 
// //               substationData={substationData}
// //               handleSubstationChange={handleSubstationChange}
// //               handleGetSubstationLocation={handleGetSubstationLocation}
// //               locationLoading={locationLoading}
// //               totalLVFeeders={totalLVFeeders}
// //               handleLVFeederCountChange={handleLVFeederCountChange}
// //               lvFeeders={lvFeeders}
// //               handleLVFeederChange={handleLVFeederChange}
// //               handleGetFeederLocation={handleGetFeederLocation}
// //               installerName={installerName}
// //               setInstallerName={setInstallerName}
// //               handleCompleteSubmit={handleCompleteSubmit}
// //               isSubmitting={isSubmitting}
// //             />
// //           } />
// //           <Route path="/installed-kits" element={<InstalledKits />} />
// //         </Routes>

// //         <footer className="bg-dark text-white text-center py-3 mt-4">
// //           <p className="mb-0">© 2025 Meter Kit Installer Portal | Built with React + Bootstrap + PostgreSQL</p>
// //         </footer>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Dashboard from './components/Dashboard';
// import InstalledKits from './components/InstalledKits';

// function App() {
//   const [substationData, setSubstationData] = useState({
//     gss: '', mvFeeder: '', gisLocation: '', dtName: '', mKitSerialNo: ''
//   });

//   const [totalLVFeeders, setTotalLVFeeders] = useState(1);
//   const [lvFeeders, setLvFeeders] = useState([
//     { id: 1, name: '', ampacity: '', gisLocation: '' }
//   ]);

//   const [installerName, setInstallerName] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [locationLoading, setLocationLoading] = useState({ substation: false, feeders: {} });

//   // API URL - will use environment variable or fallback to localhost
//   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

//   const handleGetSubstationLocation = () => {
//     if (!navigator.geolocation) {
//       alert('Geolocation is not supported by your browser');
//       return;
//     }

//     setLocationLoading({ ...locationLoading, substation: true });

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         const locationString = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
//         setSubstationData({ ...substationData, gisLocation: locationString });
//         setLocationLoading({ ...locationLoading, substation: false });
//       },
//       (error) => {
//         alert(`Error getting location: ${error.message}`);
//         setLocationLoading({ ...locationLoading, substation: false });
//       },
//       { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
//     );
//   };

//   const handleGetFeederLocation = (index) => {
//     if (!navigator.geolocation) {
//       alert('Geolocation is not supported by your browser');
//       return;
//     }

//     setLocationLoading({ 
//       ...locationLoading, 
//       feeders: { ...locationLoading.feeders, [index]: true } 
//     });

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         const locationString = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
//         handleLVFeederChange(index, 'gisLocation', locationString);
//         setLocationLoading({ 
//           ...locationLoading, 
//           feeders: { ...locationLoading.feeders, [index]: false } 
//         });
//       },
//       (error) => {
//         alert(`Error getting location: ${error.message}`);
//         setLocationLoading({ 
//           ...locationLoading, 
//           feeders: { ...locationLoading.feeders, [index]: false } 
//         });
//       },
//       { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
//     );
//   };

//   const handleLVFeederCountChange = (e) => {
//     const count = parseInt(e.target.value) || 1;
//     setTotalLVFeeders(count);
    
//     const newFeeders = [];
//     for (let i = 0; i < count; i++) {
//       newFeeders.push(lvFeeders[i] || { id: i + 1, name: '', ampacity: '', gisLocation: '' });
//     }
//     setLvFeeders(newFeeders);
//   };

//   const handleLVFeederChange = (index, field, value) => {
//     const updatedFeeders = [...lvFeeders];
//     updatedFeeders[index][field] = value;
//     setLvFeeders(updatedFeeders);
//   };

//   const handleSubstationChange = (field, value) => {
//     setSubstationData({ ...substationData, [field]: value });
//   };

//   const validateData = () => {
//     if (!substationData.gss || !substationData.mvFeeder || !substationData.gisLocation ||
//         !substationData.dtName || !substationData.mKitSerialNo) {
//       alert('Please fill all Substation details!');
//       return false;
//     }

//     const gisPattern = /^-?\d+\.?\d*,\s*-?\d+\.?\d*$/;
//     if (!gisPattern.test(substationData.gisLocation)) {
//       alert('Invalid GIS Location format for Substation! Use format: latitude, longitude');
//       return false;
//     }

//     for (let i = 0; i < lvFeeders.length; i++) {
//       const feeder = lvFeeders[i];
//       if (!feeder.name || !feeder.ampacity || !feeder.gisLocation) {
//         alert(`Please fill all details for LV Feeder ${i + 1}!`);
//         return false;
//       }
//       if (!gisPattern.test(feeder.gisLocation)) {
//         alert(`Invalid GIS Location format for LV Feeder ${i + 1}!`);
//         return false;
//       }
//     }

//     if (!installerName.trim()) {
//       alert('Please enter Installer Name!');
//       return false;
//     }

//     return true;
//   };

//   const handleCompleteSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateData()) return;

//     setIsSubmitting(true);

//     const payload = { substationData, lvFeeders, installerName };

//     try {
//       const response = await fetch(`${API_URL}/api/installations`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       const result = await response.json();

//       if (result.success) {
//         alert(`✅ Installation Successful!\n\nM.Kit Serial No: ${result.data.mkitSerialNo}\nTotal LV Feeders: ${result.data.totalLVFeeders}`);
        
//         setSubstationData({ gss: '', mvFeeder: '', gisLocation: '', dtName: '', mKitSerialNo: '' });
//         setLvFeeders([{ id: 1, name: '', ampacity: '', gisLocation: '' }]);
//         setTotalLVFeeders(1);
//         setInstallerName('');
//       } else {
//         alert(`❌ Error: ${result.message}`);
//       }
//     } catch (error) {
//       console.error('Error submitting data:', error);
//       alert('❌ Error submitting data. Please check if the server is running!');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Router>
//       <div className="app-container">
//         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//           <div className="container-fluid">
//             <Link className="navbar-brand fw-bold" to="/">⚡ Installer Application</Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ms-auto">
//                 <li className="nav-item"><Link className="nav-link" to="/">Dashboard</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/installed-kits">Installed Meter Kits</Link></li>
//                 <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
//                 <li className="nav-item"><a className="nav-link" href="#">Logout</a></li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/" element={
//             <Dashboard 
//               substationData={substationData}
//               handleSubstationChange={handleSubstationChange}
//               handleGetSubstationLocation={handleGetSubstationLocation}
//               locationLoading={locationLoading}
//               totalLVFeeders={totalLVFeeders}
//               handleLVFeederCountChange={handleLVFeederCountChange}
//               lvFeeders={lvFeeders}
//               handleLVFeederChange={handleLVFeederChange}
//               handleGetFeederLocation={handleGetFeederLocation}
//               installerName={installerName}
//               setInstallerName={setInstallerName}
//               handleCompleteSubmit={handleCompleteSubmit}
//               isSubmitting={isSubmitting}
//             />
//           } />
//           <Route path="/installed-kits" element={<InstalledKits />} />
//         </Routes>

//         <footer className="bg-dark text-white text-center py-3 mt-4">
//           <p className="mb-0">© 2025 Meter Kit Installer Portal | Built with React + Bootstrap + PostgreSQL</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import InstalledKits from './components/InstalledKits';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/installed-kits"
          element={
            <ProtectedRoute>
              <InstalledKits />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;