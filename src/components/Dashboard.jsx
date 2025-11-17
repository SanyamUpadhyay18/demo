// // import React from 'react';

// // function Dashboard({
// //   substationData, handleSubstationChange, handleGetSubstationLocation, locationLoading,
// //   totalLVFeeders, handleLVFeederCountChange, lvFeeders, handleLVFeederChange,
// //   handleGetFeederLocation, installerName, setInstallerName, handleCompleteSubmit, isSubmitting
// // }) {
// //   return (
// //     <div className="container-fluid py-4">
// //       <div className="text-center mb-4">
// //         <h1 className="display-5 fw-bold">Installer Application</h1>
// //         <p className="text-muted">Fill in the meter installation details</p>
// //       </div>

// //       <form onSubmit={handleCompleteSubmit}>
// //         <div className="row">
// //           <div className="col-lg-6 mb-4">
// //             <div className="card shadow-sm h-100">
// //               <div className="card-header bg-dark text-white">
// //                 <h4 className="mb-0">📍 Substation Details</h4>
// //               </div>
// //               <div className="card-body">
// //                 <div className="mb-3">
// //                   <label className="form-label fw-bold">Installer Name *</label>
// //                   <input type="text" className="form-control" placeholder="Enter your name"
// //                     value={installerName} onChange={(e) => setInstallerName(e.target.value)} required />
// //                 </div>

// //                 <div className="row mb-3">
// //                   <div className="col-md-6">
// //                     <label className="form-label fw-bold">GSS *</label>
// //                     <input type="text" className="form-control" placeholder="Enter GSS"
// //                       value={substationData.gss} onChange={(e) => handleSubstationChange('gss', e.target.value)} required />
// //                     <small className="text-muted">Example: GSS-001</small>
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label fw-bold">MV Feeder *</label>
// //                     <input type="text" className="form-control" placeholder="Enter MV Feeder"
// //                       value={substationData.mvFeeder} onChange={(e) => handleSubstationChange('mvFeeder', e.target.value)} required />
// //                     <small className="text-muted">Example: MV-Feeder-A</small>
// //                   </div>
// //                 </div>

// //                 <div className="mb-3">
// //                   <label className="form-label fw-bold">GIS Location (Substation) *</label>
// //                   <div className="input-group">
// //                     <input type="text" className="form-control" placeholder="Latitude, Longitude"
// //                       value={substationData.gisLocation} onChange={(e) => handleSubstationChange('gisLocation', e.target.value)} required />
// //                     <button type="button" className="btn btn-outline-primary" onClick={handleGetSubstationLocation}
// //                       disabled={locationLoading.substation}>
// //                       {locationLoading.substation ? (
// //                         <><span className="spinner-border spinner-border-sm me-2"></span>Getting...</>
// //                       ) : (<>📍 Get Current Location</>)}
// //                     </button>
// //                   </div>
// //                   <small className="text-muted">Example: 26.4499, 80.3319</small>
// //                 </div>

// //                 <div className="row mb-3">
// //                   <div className="col-md-6">
// //                     <label className="form-label fw-bold">DT Name *</label>
// //                     <input type="text" className="form-control" placeholder="Enter DT Name"
// //                       value={substationData.dtName} onChange={(e) => handleSubstationChange('dtName', e.target.value)} required />
// //                   </div>
// //                   <div className="col-md-6">
// //                     <label className="form-label fw-bold">M.Kit Serial No. *</label>
// //                     <input type="text" className="form-control" placeholder="Enter Serial No."
// //                       value={substationData.mKitSerialNo} onChange={(e) => handleSubstationChange('mKitSerialNo', e.target.value)} required />
// //                   </div>
// //                 </div>

// //                 <div className="mb-3">
// //                   <div className="map-placeholder text-center p-4 border rounded bg-light">
// //                     <p className="text-muted mb-0">🗺️ Map Preview</p>
// //                     {substationData.gisLocation && (
// //                       <small className="text-success">Location: {substationData.gisLocation}</small>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="col-lg-6 mb-4">
// //             <div className="card shadow-sm h-100">
// //               <div className="card-header bg-dark text-white">
// //                 <h4 className="mb-0">⚡ LV Feeder Details</h4>
// //               </div>
// //               <div className="card-body">
// //                 <div className="mb-4">
// //                   <label className="form-label fw-bold">Total LV Feeder Connected *</label>
// //                   <select className="form-select" value={totalLVFeeders} onChange={handleLVFeederCountChange}>
// //                     {[...Array(25)].map((_, i) => (
// //                       <option key={i + 1} value={i + 1}>{i + 1}</option>
// //                     ))}
// //                   </select>
// //                   <small className="text-muted">Maximum 25 feeders can be added</small>
// //                 </div>

// //                 <div className="lv-feeder-list" style={{ maxHeight: '450px', overflowY: 'auto' }}>
// //                   {lvFeeders.map((feeder, index) => (
// //                     <div key={feeder.id} className="mb-3 p-3 border rounded bg-light">
// //                       <h6 className="fw-bold text-primary">LV Feeder {feeder.id}</h6>
                      
// //                       <div className="row mb-2">
// //                         <div className="col-md-6">
// //                           <label className="form-label small">LV Feeder Name *</label>
// //                           <input type="text" className="form-control form-control-sm" placeholder="Enter name"
// //                             value={feeder.name} onChange={(e) => handleLVFeederChange(index, 'name', e.target.value)} required />
// //                         </div>
// //                         <div className="col-md-6">
// //                           <label className="form-label small">Ampacity *</label>
// //                           <input type="text" className="form-control form-control-sm" placeholder="e.g., 100A"
// //                             value={feeder.ampacity} onChange={(e) => handleLVFeederChange(index, 'ampacity', e.target.value)} required />
// //                         </div>
// //                       </div>

// //                       <div className="mb-2">
// //                         <label className="form-label small">GIS Location *</label>
// //                         <div className="input-group input-group-sm">
// //                           <input type="text" className="form-control" placeholder="Latitude, Longitude"
// //                             value={feeder.gisLocation} onChange={(e) => handleLVFeederChange(index, 'gisLocation', e.target.value)} required />
// //                           <button type="button" className="btn btn-outline-primary btn-sm"
// //                             onClick={() => handleGetFeederLocation(index)} disabled={locationLoading.feeders[index]}>
// //                             {locationLoading.feeders[index] ? (
// //                               <span className="spinner-border spinner-border-sm"></span>
// //                             ) : (<>📍</>)}
// //                           </button>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="row">
// //           <div className="col-12">
// //             <div className="card shadow-sm">
// //               <div className="card-body text-center">
// //                 <button type="submit" className="btn btn-success btn-lg px-5 fw-bold" disabled={isSubmitting}>
// //                   {isSubmitting ? (
// //                     <><span className="spinner-border spinner-border-sm me-2"></span>Submitting Installation Data...</>
// //                   ) : (<>✅ SUBMIT COMPLETE INSTALLATION</>)}
// //                 </button>
// //                 <p className="text-muted mt-2 mb-0">
// //                   <small>This will save both Substation and LV Feeder details to database</small>
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Dashboard;
// import React from 'react';

// function Dashboard({
//   substationData, handleSubstationChange, handleGetSubstationLocation, locationLoading,
//   totalLVFeeders, handleLVFeederCountChange, lvFeeders, handleLVFeederChange,
//   handleGetFeederLocation, installerName, setInstallerName, handleCompleteSubmit, isSubmitting
// }) {
//   return (
//     <div className="container-fluid py-4">
//       <div className="text-center mb-4">
//         <h1 className="display-5 fw-bold">Installer Application</h1>
//         <p className="text-muted">Fill in the meter installation details</p>
//       </div>

//       <form onSubmit={handleCompleteSubmit}>
//         <div className="row">
//           <div className="col-lg-6 mb-4">
//             <div className="card shadow-sm h-100">
//               <div className="card-header bg-dark text-white">
//                 <h4 className="mb-0"> Substation Details</h4>
//               </div>
//               <div className="card-body">
//                 <div className="mb-3">
//                   <label className="form-label fw-bold">Installer Name *</label>
//                   <input type="text" className="form-control" placeholder="Enter your name"
//                     value={installerName} onChange={(e) => setInstallerName(e.target.value)} required />
//                 </div>

//                 <div className="row mb-3">
//                   <div className="col-md-6">
//                     <label className="form-label fw-bold">GSS *</label>
//                     <input type="text" className="form-control" placeholder="Enter GSS"
//                       value={substationData.gss} onChange={(e) => handleSubstationChange('gss', e.target.value)} required />
//                     <small className="text-muted">Example: GSS-001</small>
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label fw-bold">MV Feeder *</label>
//                     <input type="text" className="form-control" placeholder="Enter MV Feeder"
//                       value={substationData.mvFeeder} onChange={(e) => handleSubstationChange('mvFeeder', e.target.value)} required />
//                     <small className="text-muted">Example: MV-Feeder-A</small>
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label fw-bold">GIS Location (Substation) *</label>
//                   <div className="input-group">
//                     <input type="text" className="form-control" placeholder="Latitude, Longitude"
//                       value={substationData.gisLocation} onChange={(e) => handleSubstationChange('gisLocation', e.target.value)} required />
//                     <button type="button" className="btn btn-outline-primary" onClick={handleGetSubstationLocation}
//                       disabled={locationLoading.substation}>
//                       {locationLoading.substation ? (
//                         <><span className="spinner-border spinner-border-sm me-2"></span>Getting...</>
//                       ) : (<> Get Current Location</>)}
//                     </button>
//                   </div>
//                   <small className="text-muted">Example: 26.4499, 80.3319</small>
//                 </div>

//                 <div className="row mb-3">
//                   <div className="col-md-6">
//                     <label className="form-label fw-bold">DT Name *</label>
//                     <input type="text" className="form-control" placeholder="Enter DT Name"
//                       value={substationData.dtName} onChange={(e) => handleSubstationChange('dtName', e.target.value)} required />
//                   </div>
//                   <div className="col-md-6">
//                     <label className="form-label fw-bold">M.Kit Serial No. *</label>
//                     <input type="text" className="form-control" placeholder="Enter Serial No."
//                       value={substationData.mKitSerialNo} onChange={(e) => handleSubstationChange('mKitSerialNo', e.target.value)} required />
//                   </div>
//                 </div>

//                 {/* MAP PREVIEW SECTION - UPDATED WITH GOOGLE MAPS EMBED */}
//                 <div className="mb-3">
//                   {substationData.gisLocation ? (
//                     <div className="border rounded overflow-hidden shadow-sm">
//                       <iframe
//                         width="100%"
//                         height="250"
//                         frameBorder="0"
//                         style={{ border: 0, display: 'block' }}
//                         src={`https://www.google.com/maps?q=${substationData.gisLocation}&output=embed`}
//                         allowFullScreen
//                         title="Substation Location Map"
//                       />
//                       <div className="text-center bg-light p-2">
//                         <small className="text-success fw-bold">
//                            Location: {substationData.gisLocation}
//                         </small>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="map-placeholder text-center p-4 border rounded bg-light">
//                       <div className="mb-2" style={{ fontSize: '3rem' }}>🗺️</div>
//                       <p className="text-muted mb-1 fw-bold">Map Preview</p>
//                       <small className="text-muted">Click "Get Current Location" button above to see map</small>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-6 mb-4">
//             <div className="card shadow-sm h-100">
//               <div className="card-header bg-dark text-white">
//                 <h4 className="mb-0"> LV Feeder Details</h4>
//               </div>
//               <div className="card-body">
//                 <div className="mb-4">
//                   <label className="form-label fw-bold">Total LV Feeder Connected *</label>
//                   <select className="form-select" value={totalLVFeeders} onChange={handleLVFeederCountChange}>
//                     {[...Array(25)].map((_, i) => (
//                       <option key={i + 1} value={i + 1}>{i + 1}</option>
//                     ))}
//                   </select>
//                   <small className="text-muted">Maximum 25 feeders can be added</small>
//                 </div>

//                 <div className="lv-feeder-list" style={{ maxHeight: '450px', overflowY: 'auto' }}>
//                   {lvFeeders.map((feeder, index) => (
//                     <div key={feeder.id} className="mb-3 p-3 border rounded bg-light">
//                       <h6 className="fw-bold text-primary">LV Feeder {feeder.id}</h6>
                      
//                       <div className="row mb-2">
//                         <div className="col-md-6">
//                           <label className="form-label small">LV Feeder Name *</label>
//                           <input type="text" className="form-control form-control-sm" placeholder="Enter name"
//                             value={feeder.name} onChange={(e) => handleLVFeederChange(index, 'name', e.target.value)} required />
//                         </div>
//                         <div className="col-md-6">
//                           <label className="form-label small">Ampacity *</label>
//                           <input type="text" className="form-control form-control-sm" placeholder="e.g., 100A"
//                             value={feeder.ampacity} onChange={(e) => handleLVFeederChange(index, 'ampacity', e.target.value)} required />
//                         </div>
//                       </div>

//                       <div className="mb-2">
//                         <label className="form-label small">GIS Location *</label>
//                         <div className="input-group input-group-sm">
//                           <input type="text" className="form-control" placeholder="Latitude, Longitude"
//                             value={feeder.gisLocation} onChange={(e) => handleLVFeederChange(index, 'gisLocation', e.target.value)} required />
//                           <button type="button" className="btn btn-outline-primary btn-sm"
//                             onClick={() => handleGetFeederLocation(index)} disabled={locationLoading.feeders[index]}>
//                             {locationLoading.feeders[index] ? (
//                               <span className="spinner-border spinner-border-sm"></span>
//                             ) : (<></>)}
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-12">
//             <div className="card shadow-sm">
//               <div className="card-body text-center">
//                 <button type="submit" className="btn btn-success btn-lg px-5 fw-bold" disabled={isSubmitting}>
//                   {isSubmitting ? (
//                     <><span className="spinner-border spinner-border-sm me-2"></span>Submitting Installation Data...</>
//                   ) : (<> SUBMIT COMPLETE INSTALLATION</>)}
//                 </button>
//                 <p className="text-muted mt-2 mb-0">
//                   <small>This will save both Substation and LV Feeder details to database</small>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Dashboard;
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [substationData, setSubstationData] = useState({
//     gss: '',
//     mvFeeder: '',
//     gisLocation: '',
//     dtName: '',
//     mKitSerialNo: ''
//   });

//   const [lvFeeders, setLvFeeders] = useState([
//     { name: '', ampacity: '', gisLocation: '' }
//   ]);

//   const [locationStatus, setLocationStatus] = useState('');

//   useEffect(() => {
//     const userData = localStorage.getItem('user');
//     if (userData) {
//       setUser(JSON.parse(userData));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   const handleSubstationChange = (e) => {
//     setSubstationData({
//       ...substationData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleLvFeederChange = (index, field, value) => {
//     const updatedFeeders = [...lvFeeders];
//     updatedFeeders[index][field] = value;
//     setLvFeeders(updatedFeeders);
//   };

//   const addLvFeeder = () => {
//     if (lvFeeders.length < 10) {
//       setLvFeeders([...lvFeeders, { name: '', ampacity: '', gisLocation: '' }]);
//     }
//   };

//   const removeLvFeeder = (index) => {
//     if (lvFeeders.length > 1) {
//       const updatedFeeders = lvFeeders.filter((_, i) => i !== index);
//       setLvFeeders(updatedFeeders);
//     }
//   };

//   // Get Substation Location
//   const getSubstationLocation = () => {
//     setLocationStatus('📍 Getting location...');
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const lat = position.coords.latitude.toFixed(6);
//           const lon = position.coords.longitude.toFixed(6);
//           setSubstationData({
//             ...substationData,
//             gisLocation: `${lat}, ${lon}`
//           });
//           setLocationStatus('✅ Location captured!');
//           setTimeout(() => setLocationStatus(''), 3000);
//         },
//         (error) => {
//           setLocationStatus('❌ Location access denied');
//           setTimeout(() => setLocationStatus(''), 3000);
//           console.error('Error getting location:', error);
//         }
//       );
//     } else {
//       setLocationStatus('❌ Geolocation not supported');
//       setTimeout(() => setLocationStatus(''), 3000);
//     }
//   };

//   // Get LV Feeder Location
//   const getLvFeederLocation = (index) => {
//     setLocationStatus('📍 Getting location...');
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const lat = position.coords.latitude.toFixed(6);
//           const lon = position.coords.longitude.toFixed(6);
//           handleLvFeederChange(index, 'gisLocation', `${lat}, ${lon}`);
//           setLocationStatus('✅ Location captured!');
//           setTimeout(() => setLocationStatus(''), 3000);
//         },
//         (error) => {
//           setLocationStatus('❌ Location access denied');
//           setTimeout(() => setLocationStatus(''), 3000);
//           console.error('Error getting location:', error);
//         }
//       );
//     } else {
//       setLocationStatus('❌ Geolocation not supported');
//       setTimeout(() => setLocationStatus(''), 3000);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem('token');

//     try {
//       const response = await fetch('http://localhost:5000/api/installations', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           substationData,
//           lvFeeders
//         })
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert('✅ Installation data saved successfully!');
//         // Reset form
//         setSubstationData({
//           gss: '',
//           mvFeeder: '',
//           gisLocation: '',
//           dtName: '',
//           mKitSerialNo: ''
//         });
//         setLvFeeders([{ name: '', ampacity: '', gisLocation: '' }]);
//       } else {
//         alert('❌ Error: ' + data.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('❌ Unable to connect to server');
//     }
//   };

//   return (
//     <div className="app-container">
//       {/* Navbar */}
//       <nav className="navbar navbar-dark bg-dark">
//         <div className="container-fluid">
//           <span className="navbar-brand mb-0 h1">📡 Meter Kit Installer Portal</span>
//           <div className="d-flex align-items-center gap-2">
//             {user && (
//               <>
//                 <span className="text-white me-2">
//                   👤 {user.fullName || user.username}
//                 </span>
//                 <button 
//                   className="btn btn-info btn-sm"
//                   onClick={() => navigate('/installed-kits')}
//                 >
//                   📋 View Kits
//                 </button>
//                 <button 
//                   className="btn btn-outline-light btn-sm"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="container-fluid py-4">
//         <div className="row justify-content-center">
//           <div className="col-12 col-lg-10">
//             <h2 className="text-center text-white mb-4 display-5">
//               🔧 Meter Kit Installation Form
//             </h2>

//             {/* Location Status Alert */}
//             {locationStatus && (
//               <div className="alert alert-info text-center" role="alert">
//                 {locationStatus}
//               </div>
//             )}

//             <form onSubmit={handleSubmit}>
//               {/* Substation Details Card */}
//               <div className="card shadow-lg mb-4">
//                 <div className="card-header bg-primary text-white">
//                   <h5 className="mb-0">📍 Substation Details</h5>
//                 </div>
//                 <div className="card-body">
//                   <div className="row g-3">
//                     <div className="col-md-6">
//                       <label className="form-label">GSS Name *</label>
//                       <input
//                         type="text"
//                         name="gss"
//                         className="form-control"
//                         value={substationData.gss}
//                         onChange={handleSubstationChange}
//                         required
//                         placeholder="Enter GSS Name"
//                       />
//                     </div>

//                     <div className="col-md-6">
//                       <label className="form-label">MV Feeder *</label>
//                       <input
//                         type="text"
//                         name="mvFeeder"
//                         className="form-control"
//                         value={substationData.mvFeeder}
//                         onChange={handleSubstationChange}
//                         required
//                         placeholder="Enter MV Feeder Name"
//                       />
//                     </div>

//                     <div className="col-md-6">
//                       <label className="form-label">GIS Location (Lat, Lon) *</label>
//                       <div className="input-group">
//                         <input
//                           type="text"
//                           name="gisLocation"
//                           className="form-control"
//                           value={substationData.gisLocation}
//                           onChange={handleSubstationChange}
//                           required
//                           placeholder="28.7041, 77.1025"
//                         />
//                         <button
//                           type="button"
//                           className="btn btn-outline-primary"
//                           onClick={getSubstationLocation}
//                         >
//                           📍 Get Location
//                         </button>
//                       </div>
//                     </div>

//                     <div className="col-md-6">
//                       <label className="form-label">DT Name *</label>
//                       <input
//                         type="text"
//                         name="dtName"
//                         className="form-control"
//                         value={substationData.dtName}
//                         onChange={handleSubstationChange}
//                         required
//                         placeholder="Enter Distribution Transformer Name"
//                       />
//                     </div>

//                     <div className="col-md-12">
//                       <label className="form-label">M.Kit Serial Number *</label>
//                       <input
//                         type="text"
//                         name="mKitSerialNo"
//                         className="form-control"
//                         value={substationData.mKitSerialNo}
//                         onChange={handleSubstationChange}
//                         required
//                         placeholder="Enter Meter Kit Serial Number"
//                       />
//                     </div>

//                     {/* Map Placeholder */}
//                     <div className="col-12">
//                       <div className="map-placeholder rounded">
//                         <div className="text-center">
//                           <i className="bi bi-geo-alt-fill" style={{ fontSize: '3rem', color: '#667eea' }}></i>
//                           <p className="mb-0 mt-2 fw-bold">
//                             {substationData.gisLocation ? (
//                               <>📍 Location: {substationData.gisLocation}</>
//                             ) : (
//                               '🗺️ Map Placeholder - Click "Get Location" to capture coordinates'
//                             )}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* LV Feeders Card */}
//               <div className="card shadow-lg mb-4">
//                 <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
//                   <h5 className="mb-0">⚡ LV Feeder Details</h5>
//                   <button
//                     type="button"
//                     className="btn btn-light btn-sm"
//                     onClick={addLvFeeder}
//                     disabled={lvFeeders.length >= 10}
//                   >
//                     + Add Feeder
//                   </button>
//                 </div>
//                 <div className="card-body">
//                   <div className="lv-feeder-list" style={{ maxHeight: '500px', overflowY: 'auto' }}>
//                     {lvFeeders.map((feeder, index) => (
//                       <div key={index} className="border rounded p-3 mb-3 bg-light">
//                         <div className="d-flex justify-content-between align-items-center mb-2">
//                           <h6 className="mb-0">🔌 Feeder {index + 1}</h6>
//                           {lvFeeders.length > 1 && (
//                             <button
//                               type="button"
//                               className="btn btn-danger btn-sm"
//                               onClick={() => removeLvFeeder(index)}
//                             >
//                               ✖ Remove
//                             </button>
//                           )}
//                         </div>

//                         <div className="row g-3">
//                           <div className="col-md-4">
//                             <label className="form-label">Feeder Name *</label>
//                             <input
//                               type="text"
//                               className="form-control"
//                               value={feeder.name}
//                               onChange={(e) => handleLvFeederChange(index, 'name', e.target.value)}
//                               required
//                               placeholder="e.g., LV-F1"
//                             />
//                           </div>

//                           <div className="col-md-4">
//                             <label className="form-label">Ampacity *</label>
//                             <select
//                               className="form-select"
//                               value={feeder.ampacity}
//                               onChange={(e) => handleLvFeederChange(index, 'ampacity', e.target.value)}
//                               required
//                             >
//                               <option value="">Select Ampacity</option>
//                               <option value="100A">100A</option>
//                               <option value="200A">200A</option>
//                               <option value="300A">300A</option>
//                               <option value="400A">400A</option>
//                               <option value="500A">500A</option>
//                             </select>
//                           </div>

//                           <div className="col-md-4">
//                             <label className="form-label">GIS Location *</label>
//                             <div className="input-group">
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 value={feeder.gisLocation}
//                                 onChange={(e) => handleLvFeederChange(index, 'gisLocation', e.target.value)}
//                                 required
//                                 placeholder="28.7041, 77.1025"
//                               />
//                               <button
//                                 type="button"
//                                 className="btn btn-outline-success btn-sm"
//                                 onClick={() => getLvFeederLocation(index)}
//                               >
//                                 📍
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="text-center">
//                 <button type="submit" className="btn btn-success btn-lg px-5">
//                   💾 Save Installation Data
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-dark text-white text-center py-3 mt-4">
//         <p className="mb-0">© 2024 Meter Kit Installer | Powered by NPD QA Team</p>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  
  const [substationData, setSubstationData] = useState({
    gss: '',
    mvFeeder: '',
    gisLocation: '',
    dtName: '',
    mKitSerialNo: ''
  });

  const [locationLoading, setLocationLoading] = useState({
    substation: false,
    feeders: []
  });

  const [totalLVFeeders, setTotalLVFeeders] = useState(1);
  const [lvFeeders, setLvFeeders] = useState([
    { id: 1, name: '', ampacity: '', gisLocation: '' }
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleSubstationChange = (field, value) => {
    setSubstationData({ ...substationData, [field]: value });
  };

  const handleGetSubstationLocation = () => {
    setLocationLoading({ ...locationLoading, substation: true });
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(6);
          const lon = position.coords.longitude.toFixed(6);
          handleSubstationChange('gisLocation', `${lat}, ${lon}`);
          setLocationLoading({ ...locationLoading, substation: false });
        },
        (error) => {
          alert('Unable to get location. Please enable location services.');
          setLocationLoading({ ...locationLoading, substation: false });
          console.error(error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      setLocationLoading({ ...locationLoading, substation: false });
    }
  };

  const handleLVFeederCountChange = (e) => {
    const count = parseInt(e.target.value);
    setTotalLVFeeders(count);
    
    const newFeeders = Array.from({ length: count }, (_, i) => {
      return lvFeeders[i] || { id: i + 1, name: '', ampacity: '', gisLocation: '' };
    });
    
    setLvFeeders(newFeeders);
    setLocationLoading({ 
      ...locationLoading, 
      feeders: Array(count).fill(false) 
    });
  };

  const handleLVFeederChange = (index, field, value) => {
    const updatedFeeders = [...lvFeeders];
    updatedFeeders[index][field] = value;
    setLvFeeders(updatedFeeders);
  };

  const handleGetFeederLocation = (index) => {
    const updatedLoadingState = [...locationLoading.feeders];
    updatedLoadingState[index] = true;
    setLocationLoading({ ...locationLoading, feeders: updatedLoadingState });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(6);
          const lon = position.coords.longitude.toFixed(6);
          handleLVFeederChange(index, 'gisLocation', `${lat}, ${lon}`);
          
          const updatedLoadingState = [...locationLoading.feeders];
          updatedLoadingState[index] = false;
          setLocationLoading({ ...locationLoading, feeders: updatedLoadingState });
        },
        (error) => {
          alert('Unable to get location');
          const updatedLoadingState = [...locationLoading.feeders];
          updatedLoadingState[index] = false;
          setLocationLoading({ ...locationLoading, feeders: updatedLoadingState });
          console.error(error);
        }
      );
    } else {
      alert('Geolocation not supported');
      const updatedLoadingState = [...locationLoading.feeders];
      updatedLoadingState[index] = false;
      setLocationLoading({ ...locationLoading, feeders: updatedLoadingState });
    }
  };

  const handleCompleteSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:5000/api/installations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          substationData,
          lvFeeders: lvFeeders.map(f => ({
            name: f.name,
            ampacity: f.ampacity,
            gisLocation: f.gisLocation
          }))
        })
      });

      const data = await response.json();

      if (data.success) {
        alert('✅ Installation data saved successfully!');
        // Reset form
        setSubstationData({
          gss: '',
          mvFeeder: '',
          gisLocation: '',
          dtName: '',
          mKitSerialNo: ''
        });
        setTotalLVFeeders(1);
        setLvFeeders([{ id: 1, name: '', ampacity: '', gisLocation: '' }]);
      } else {
        alert(' Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Unable to connect to server');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">📡 Meter Kit Installer Portal</span>
          <div className="d-flex align-items-center gap-2">
            {user && (
              <>
                <span className="text-white me-2">
                  👤 {user.fullName || user.username}
                </span>
                <button 
                  className="btn btn-info btn-sm"
                  onClick={() => navigate('/installed-kits')}
                >
                  Install Kits
                </button>
                <button 
                  className="btn btn-outline-light btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-fluid py-4">
        <div className="text-center mb-4">
           <h1 className="display-5 fw-bold" style={{ color: '#840a6fff', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                    Installer Application
                       </h1>
            <p style={{ color: '#02000089', fontSize: '1.1rem' }}>
                         Fill in the meter installation details
                  </p>
        </div>
    

        <form onSubmit={handleCompleteSubmit}>
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-dark text-white" style={{ color: '#ffffff' }}>
                   <h4 className="mb-0" style={{ color: '#ffffff' }}> Substation Details</h4>
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">GSS *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter GSS"
                        value={substationData.gss} 
                        onChange={(e) => handleSubstationChange('gss', e.target.value)} 
                        required 
                      />
                      <small className="text-muted">Example: GSS-001</small>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">MV Feeder *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter MV Feeder"
                        value={substationData.mvFeeder} 
                        onChange={(e) => handleSubstationChange('mvFeeder', e.target.value)} 
                        required 
                      />
                      <small className="text-muted">Example: MV-Feeder-A</small>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">GIS Location (Substation) *</label>
                    <div className="input-group">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Latitude, Longitude"
                        value={substationData.gisLocation} 
                        onChange={(e) => handleSubstationChange('gisLocation', e.target.value)} 
                        required 
                      />
                      <button 
                        type="button" 
                        className="btn btn-outline-primary" 
                        onClick={handleGetSubstationLocation}
                        disabled={locationLoading.substation}
                      >
                        {locationLoading.substation ? (
                          <><span className="spinner-border spinner-border-sm me-2"></span>Getting...</>
                        ) : (
                          <> Get Current Location</>
                        )}
                      </button>
                    </div>
                    <small className="text-muted">Example: 26.4499, 80.3319</small>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">DT Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter DT Name"
                        value={substationData.dtName} 
                        onChange={(e) => handleSubstationChange('dtName', e.target.value)} 
                        required 
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">M.Kit Serial No. *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Serial No."
                        value={substationData.mKitSerialNo} 
                        onChange={(e) => handleSubstationChange('mKitSerialNo', e.target.value)} 
                        required 
                      />
                    </div>
                  </div>

                  {/* MAP PREVIEW SECTION */}
                  <div className="mb-3">
                    {substationData.gisLocation ? (
                      <div className="border rounded overflow-hidden shadow-sm">
                        <iframe
                          width="100%"
                          height="250"
                          frameBorder="0"
                          style={{ border: 0, display: 'block' }}
                          src={`https://www.google.com/maps?q=${substationData.gisLocation}&output=embed`}
                          allowFullScreen
                          title="Substation Location Map"
                        />
                        <div className="text-center bg-light p-2">
                          <small className="text-success fw-bold">
                             Location: {substationData.gisLocation}
                          </small>
                        </div>
                      </div>
                    ) : (
                      <div className="map-placeholder text-center p-4 border rounded bg-light">
                        <div className="mb-2" style={{ fontSize: '3rem' }}>🗺️</div>
                        <p className="text-muted mb-1 fw-bold">Map Preview</p>
                        <small className="text-muted">Click "Get Current Location" button above to see map</small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-dark text-white" style={{ color: '#ffffff' }}>
                    <h4 className="mb-0" style={{ color: '#ffffff' }}> LV Feeder Details</h4>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <label className="form-label fw-bold">Total LV Feeder Connected *</label>
                    <select 
                      className="form-select" 
                      value={totalLVFeeders} 
                      onChange={handleLVFeederCountChange}
                    >
                      {[...Array(25)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                    <small className="text-muted">Maximum 25 feeders can be added</small>
                  </div>

                  <div className="lv-feeder-list" style={{ maxHeight: '450px', overflowY: 'auto' }}>
                    {lvFeeders.map((feeder, index) => (
                      <div key={feeder.id} className="mb-3 p-3 border rounded bg-light">
                        <h6 className="fw-bold text-primary">🔌 LV Feeder {feeder.id}</h6>
                        
                        <div className="row mb-2">
                          <div className="col-md-6">
                            <label className="form-label small">LV Feeder Name *</label>
                            <input 
                              type="text" 
                              className="form-control form-control-sm" 
                              placeholder="Enter name"
                              value={feeder.name} 
                              onChange={(e) => handleLVFeederChange(index, 'name', e.target.value)} 
                              required 
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label small">Ampacity *</label>
                            <input 
                              type="text" 
                              className="form-control form-control-sm" 
                              placeholder="e.g., 100A"
                              value={feeder.ampacity} 
                              onChange={(e) => handleLVFeederChange(index, 'ampacity', e.target.value)} 
                              required 
                            />
                          </div>
                        </div>

                        <div className="mb-2">
                          <label className="form-label small">GIS Location *</label>
                          <div className="input-group input-group-sm">
                            <input 
                              type="text" 
                              className="form-control" 
                              placeholder="Latitude, Longitude"
                              value={feeder.gisLocation} 
                              onChange={(e) => handleLVFeederChange(index, 'gisLocation', e.target.value)} 
                              required 
                            />
                            <button 
                              type="button" 
                              className="btn btn-outline-primary btn-sm"
                              onClick={() => handleGetFeederLocation(index)} 
                              disabled={locationLoading.feeders[index]}
                            >
                              {locationLoading.feeders[index] ? (
                                <span className="spinner-border spinner-border-sm"></span>
                              ) : (
                                <>Get</>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-body text-center">
                  <button 
                    type="submit" 
                    className="btn btn-success btn-lg px-5 fw-bold" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <><span className="spinner-border spinner-border-sm me-2"></span>Submitting Installation Data...</>
                    ) : (
                      <> SUBMIT COMPLETE INSTALLATION</>
                    )}
                  </button>
                  <p className="text-muted mt-2 mb-0">
                    <small>This will save both Substation and LV Feeder details to database</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p className="mb-0">© 2024 Meter Kit Installer | Powered by NPD QA Team</p>
      </footer>
    </div>
  );
}

export default Dashboard;