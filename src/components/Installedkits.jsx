// // import React, { useState, useEffect } from 'react';

// // function InstalledKits() {
// //   const [installations, setInstallations] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [statistics, setStatistics] = useState(null);
// //   const [selectedInstallation, setSelectedInstallation] = useState(null);

// //   useEffect(() => {
// //     fetchInstallations();
// //     fetchStatistics();
// //   }, []);

// //   const fetchInstallations = async () => {
// //     try {
// //       setLoading(true);
// //       const response = await fetch('http://localhost:5000/api/installations');
// //       const result = await response.json();

// //       if (result.success) {
// //         setInstallations(result.data);
// //       } else {
// //         setError(result.message);
// //       }
// //     } catch (err) {
// //       setError('Error fetching installations. Please check if server is running!');
// //       console.error('Fetch error:', err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchStatistics = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5000/api/statistics');
// //       const result = await response.json();
      
// //       if (result.success) {
// //         setStatistics(result.data);
// //       }
// //     } catch (err) {
// //       console.error('Statistics fetch error:', err);
// //     }
// //   };

// //   const handleSearch = async () => {
// //     if (!searchTerm.trim()) {
// //       fetchInstallations();
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       const response = await fetch(`http://localhost:5000/api/installations/search/${searchTerm}`);
// //       const result = await response.json();

// //       if (result.success) {
// //         setInstallations(result.data);
// //       }
// //     } catch (err) {
// //       setError('Error searching installations');
// //       console.error('Search error:', err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const viewDetails = (installation) => {
// //     setSelectedInstallation(installation);
// //   };

// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString('en-IN') + ' ' + date.toLocaleTimeString('en-IN');
// //   };

// //   if (loading && installations.length === 0) {
// //     return (
// //       <div className="container-fluid py-5 text-center">
// //         <div className="spinner-border text-primary" role="status">
// //           <span className="visually-hidden">Loading...</span>
// //         </div>
// //         <p className="mt-3">Loading installed meter kits...</p>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="container-fluid py-5">
// //         <div className="alert alert-danger text-center" role="alert">
// //           <h4 className="alert-heading">Error!</h4>
// //           <p>{error}</p>
// //           <button className="btn btn-primary mt-3" onClick={fetchInstallations}>Retry</button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="container-fluid py-4">
// //       <div className="text-center mb-4">
// //         <h1 className="display-5 fw-bold">📦 Active Installed Meter Kits</h1>
// //         <p className="text-muted">View all active meter kit installations and their locations</p>
// //       </div>

// //       {statistics && (
// //         <div className="row mb-4">
// //           <div className="col-md-3 mb-3">
// //             <div className="card bg-primary text-white shadow-sm">
// //               <div className="card-body text-center">
// //                 <h3 className="display-6 fw-bold">{statistics.active_installations}</h3>
// //                 <p className="mb-0">Active Installations</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="col-md-3 mb-3">
// //             <div className="card bg-success text-white shadow-sm">
// //               <div className="card-body text-center">
// //                 <h3 className="display-6 fw-bold">{statistics.total_lv_feeders}</h3>
// //                 <p className="mb-0">Total LV Feeders</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="col-md-3 mb-3">
// //             <div className="card bg-info text-white shadow-sm">
// //               <div className="card-body text-center">
// //                 <h3 className="display-6 fw-bold">{statistics.unique_gss_locations}</h3>
// //                 <p className="mb-0">Unique GSS Locations</p>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="col-md-3 mb-3">
// //             <div className="card bg-warning text-white shadow-sm">
// //               <div className="card-body text-center">
// //                 <h3 className="display-6 fw-bold">{statistics.total_installers}</h3>
// //                 <p className="mb-0">Total Installers</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <div className="row mb-4">
// //         <div className="col-md-8 mx-auto">
// //           <div className="input-group shadow-sm">
// //             <input type="text" className="form-control"
// //               placeholder="Search by GSS, MV Feeder, DT Name, Serial No, or Installer Name..."
// //               value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
// //               onKeyPress={(e) => e.key === 'Enter' && handleSearch()} />
// //             <button className="btn btn-primary" onClick={handleSearch}>🔍 Search</button>
// //             <button className="btn btn-outline-secondary" onClick={fetchInstallations}>🔄 Refresh</button>
// //           </div>
// //         </div>
// //       </div>

// //       {installations.length === 0 ? (
// //         <div className="alert alert-info text-center">
// //           <h4>No installations found</h4>
// //           <p>Start by adding new meter kit installations from the Dashboard</p>
// //         </div>
// //       ) : (
// //         <div className="card shadow-sm">
// //           <div className="card-header bg-dark text-white">
// //             <h5 className="mb-0">Installation Records ({installations.length})</h5>
// //           </div>
// //           <div className="card-body p-0">
// //             <div className="table-responsive">
// //               <table className="table table-hover table-striped mb-0">
// //                 <thead className="table-light">
// //                   <tr>
// //                     <th>#</th>
// //                     <th>M.Kit Serial No</th>
// //                     <th>GSS</th>
// //                     <th>MV Feeder</th>
// //                     <th>DT Name</th>
// //                     <th>Location</th>
// //                     <th>LV Feeders</th>
// //                     <th>Installer</th>
// //                     <th>Installation Date</th>
// //                     <th>Status</th>
// //                     <th>Actions</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {installations.map((installation, index) => (
// //                     <tr key={installation.substation_id}>
// //                       <td>{index + 1}</td>
// //                       <td><strong className="text-primary">{installation.mkit_serial_no}</strong></td>
// //                       <td>{installation.gss}</td>
// //                       <td>{installation.mv_feeder}</td>
// //                       <td>{installation.dt_name}</td>
// //                       <td><small className="text-muted">{installation.substation_location}</small></td>
// //                       <td><span className="badge bg-info">{installation.total_lv_feeders}</span></td>
// //                       <td>{installation.installer_name || 'N/A'}</td>
// //                       <td><small>{formatDate(installation.installation_date)}</small></td>
// //                       <td>
// //                         <span className={`badge ${installation.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
// //                           {installation.status}
// //                         </span>
// //                       </td>
// //                       <td>
// //                         <button className="btn btn-sm btn-outline-primary"
// //                           onClick={() => viewDetails(installation)}
// //                           data-bs-toggle="modal" data-bs-target="#detailsModal">
// //                           👁️ View
// //                         </button>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       )}

// //       <div className="modal fade" id="detailsModal" tabIndex="-1">
// //         <div className="modal-dialog modal-lg modal-dialog-scrollable">
// //           <div className="modal-content">
// //             <div className="modal-header bg-primary text-white">
// //               <h5 className="modal-title">📋 Installation Details - {selectedInstallation?.mkit_serial_no}</h5>
// //               <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
// //             </div>
// //             <div className="modal-body">
// //               {selectedInstallation && (
// //                 <>
// //                   <div className="card mb-3">
// //                     <div className="card-header bg-dark text-white">
// //                       <h6 className="mb-0">📍 Substation Information</h6>
// //                     </div>
// //                     <div className="card-body">
// //                       <div className="row">
// //                         <div className="col-md-6 mb-2"><strong>GSS:</strong> {selectedInstallation.gss}</div>
// //                         <div className="col-md-6 mb-2"><strong>MV Feeder:</strong> {selectedInstallation.mv_feeder}</div>
// //                         <div className="col-md-6 mb-2"><strong>DT Name:</strong> {selectedInstallation.dt_name}</div>
// //                         <div className="col-md-6 mb-2"><strong>M.Kit Serial No:</strong> {selectedInstallation.mkit_serial_no}</div>
// //                         <div className="col-12 mb-2"><strong>Location:</strong> {selectedInstallation.substation_location}</div>
// //                         <div className="col-md-6 mb-2"><strong>Latitude:</strong> {selectedInstallation.sub_latitude}</div>
// //                         <div className="col-md-6 mb-2"><strong>Longitude:</strong> {selectedInstallation.sub_longitude}</div>
// //                         <div className="col-md-6 mb-2"><strong>Installer:</strong> {selectedInstallation.installer_name}</div>
// //                         <div className="col-md-6 mb-2"><strong>Date:</strong> {formatDate(selectedInstallation.installation_date)}</div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="card">
// //                     <div className="card-header bg-dark text-white">
// //                       <h6 className="mb-0">⚡ LV Feeders ({selectedInstallation.total_lv_feeders})</h6>
// //                     </div>
// //                     <div className="card-body">
// //                       <div className="table-responsive">
// //                         <table className="table table-sm table-bordered">
// //                           <thead className="table-light">
// //                             <tr>
// //                               <th>#</th>
// //                               <th>Feeder Name</th>
// //                               <th>Ampacity</th>
// //                               <th>Location</th>
// //                               <th>Coordinates</th>
// //                             </tr>
// //                           </thead>
// //                           <tbody>
// //                             {selectedInstallation.lv_feeders.map((feeder) => (
// //                               <tr key={feeder.feeder_id}>
// //                                 <td>{feeder.feeder_number}</td>
// //                                 <td><strong>{feeder.feeder_name}</strong></td>
// //                                 <td>{feeder.ampacity}</td>
// //                                 <td><small>{feeder.gis_location}</small></td>
// //                                 <td>
// //                                   <small>
// //                                     Lat: {feeder.latitude}<br />
// //                                     Lon: {feeder.longitude}
// //                                   </small>
// //                                 </td>
// //                               </tr>
// //                             ))}
// //                           </tbody>
// //                         </table>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </>
// //               )}
// //             </div>
// //             <div className="modal-footer">
// //               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default InstalledKits;
// import React, { useState, useEffect } from 'react';

// function InstalledKits() {
//   const [installations, setInstallations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statistics, setStatistics] = useState(null);
//   const [selectedInstallation, setSelectedInstallation] = useState(null);

//   // API URL - will use environment variable or fallback to localhost
//   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

//   useEffect(() => {
//     fetchInstallations();
//     fetchStatistics();
//   }, []);

//   const fetchInstallations = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${API_URL}/api/installations`);
//       const result = await response.json();

//       if (result.success) {
//         setInstallations(result.data);
//       } else {
//         setError(result.message);
//       }
//     } catch (err) {
//       setError('Error fetching installations. Please check if server is running!');
//       console.error('Fetch error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchStatistics = async () => {
//     try {
//       const response = await fetch(`${API_URL}/api/statistics`);
//       const result = await response.json();
      
//       if (result.success) {
//         setStatistics(result.data);
//       }
//     } catch (err) {
//       console.error('Statistics fetch error:', err);
//     }
//   };

//   const handleSearch = async () => {
//     if (!searchTerm.trim()) {
//       fetchInstallations();
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await fetch(`${API_URL}/api/installations/search/${searchTerm}`);
//       const result = await response.json();

//       if (result.success) {
//         setInstallations(result.data);
//       }
//     } catch (err) {
//       setError('Error searching installations');
//       console.error('Search error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const viewDetails = (installation) => {
//     setSelectedInstallation(installation);
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-IN') + ' ' + date.toLocaleTimeString('en-IN');
//   };

//   if (loading && installations.length === 0) {
//     return (
//       <div className="container-fluid py-5 text-center">
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//         <p className="mt-3">Loading installed meter kits...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container-fluid py-5">
//         <div className="alert alert-danger text-center" role="alert">
//           <h4 className="alert-heading">Error!</h4>
//           <p>{error}</p>
//           <button className="btn btn-primary mt-3" onClick={fetchInstallations}>Retry</button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container-fluid py-4">
//       <div className="text-center mb-4">
//         <h1 className="display-5 fw-bold"> Active Installed Meter Kits</h1>
//         <p className="text-muted">View all active meter kit installations and their locations</p>
//       </div>

//       {statistics && (
//         <div className="row mb-4">
//           <div className="col-md-3 mb-3">
//             <div className="card bg-primary text-white shadow-sm">
//               <div className="card-body text-center">
//                 <h3 className="display-6 fw-bold">{statistics.active_installations}</h3>
//                 <p className="mb-0">Active Installations</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 mb-3">
//             <div className="card bg-success text-white shadow-sm">
//               <div className="card-body text-center">
//                 <h3 className="display-6 fw-bold">{statistics.total_lv_feeders}</h3>
//                 <p className="mb-0">Total LV Feeders</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 mb-3">
//             <div className="card bg-info text-white shadow-sm">
//               <div className="card-body text-center">
//                 <h3 className="display-6 fw-bold">{statistics.unique_gss_locations}</h3>
//                 <p className="mb-0">Unique GSS Locations</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-3 mb-3">
//             <div className="card bg-warning text-white shadow-sm">
//               <div className="card-body text-center">
//                 <h3 className="display-6 fw-bold">{statistics.total_installers}</h3>
//                 <p className="mb-0">Total Installers</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="row mb-4">
//         <div className="col-md-8 mx-auto">
//           <div className="input-group shadow-sm">
//             <input type="text" className="form-control"
//               placeholder="Search by GSS, MV Feeder, DT Name, Serial No, or Installer Name..."
//               value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSearch()} />
//             <button className="btn btn-primary" onClick={handleSearch}>🔍 Search</button>
//             <button className="btn btn-outline-secondary" onClick={fetchInstallations}>🔄 Refresh</button>
//           </div>
//         </div>
//       </div>

//       {installations.length === 0 ? (
//         <div className="alert alert-info text-center">
//           <h4>No installations found</h4>
//           <p>Start by adding new meter kit installations from the Dashboard</p>
//         </div>
//       ) : (
//         <div className="card shadow-sm">
//           <div className="card-header bg-dark text-white">
//             <h5 className="mb-0">Installation Records ({installations.length})</h5>
//           </div>
//           <div className="card-body p-0">
//             <div className="table-responsive">
//               <table className="table table-hover table-striped mb-0">
//                 <thead className="table-light">
//                   <tr>
//                     <th>#</th>
//                     <th>M.Kit Serial No</th>
//                     <th>GSS</th>
//                     <th>MV Feeder</th>
//                     <th>DT Name</th>
//                     <th>Location</th>
//                     <th>LV Feeders</th>
//                     <th>Installer</th>
//                     <th>Installation Date</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {installations.map((installation, index) => (
//                     <tr key={installation.substation_id}>
//                       <td>{index + 1}</td>
//                       <td><strong className="text-primary">{installation.mkit_serial_no}</strong></td>
//                       <td>{installation.gss}</td>
//                       <td>{installation.mv_feeder}</td>
//                       <td>{installation.dt_name}</td>
//                       <td><small className="text-muted">{installation.substation_location}</small></td>
//                       <td><span className="badge bg-info">{installation.total_lv_feeders}</span></td>
//                       <td>{installation.installer_name || 'N/A'}</td>
//                       <td><small>{formatDate(installation.installation_date)}</small></td>
//                       <td>
//                         <span className={`badge ${installation.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
//                           {installation.status}
//                         </span>
//                       </td>
//                       <td>
//                         <button className="btn btn-sm btn-outline-primary"
//                           onClick={() => viewDetails(installation)}
//                           data-bs-toggle="modal" data-bs-target="#detailsModal">
//                            View
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="modal fade" id="detailsModal" tabIndex="-1">
//         <div className="modal-dialog modal-lg modal-dialog-scrollable">
//           <div className="modal-content">
//             <div className="modal-header bg-primary text-white">
//               <h5 className="modal-title"> Installation Details - {selectedInstallation?.mkit_serial_no}</h5>
//               <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
//             </div>
//             <div className="modal-body">
//               {selectedInstallation && (
//                 <>
//                   <div className="card mb-3">
//                     <div className="card-header bg-dark text-white">
//                       <h6 className="mb-0"> Substation Information</h6>
//                     </div>
//                     <div className="card-body">
//                       <div className="row">
//                         <div className="col-md-6 mb-2"><strong>GSS:</strong> {selectedInstallation.gss}</div>
//                         <div className="col-md-6 mb-2"><strong>MV Feeder:</strong> {selectedInstallation.mv_feeder}</div>
//                         <div className="col-md-6 mb-2"><strong>DT Name:</strong> {selectedInstallation.dt_name}</div>
//                         <div className="col-md-6 mb-2"><strong>M.Kit Serial No:</strong> {selectedInstallation.mkit_serial_no}</div>
//                         <div className="col-12 mb-2"><strong>Location:</strong> {selectedInstallation.substation_location}</div>
//                         <div className="col-md-6 mb-2"><strong>Latitude:</strong> {selectedInstallation.sub_latitude}</div>
//                         <div className="col-md-6 mb-2"><strong>Longitude:</strong> {selectedInstallation.sub_longitude}</div>
//                         <div className="col-md-6 mb-2"><strong>Installer:</strong> {selectedInstallation.installer_name}</div>
//                         <div className="col-md-6 mb-2"><strong>Date:</strong> {formatDate(selectedInstallation.installation_date)}</div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="card">
//                     <div className="card-header bg-dark text-white">
//                       <h6 className="mb-0">⚡ LV Feeders ({selectedInstallation.total_lv_feeders})</h6>
//                     </div>
//                     <div className="card-body">
//                       <div className="table-responsive">
//                         <table className="table table-sm table-bordered">
//                           <thead className="table-light">
//                             <tr>
//                               <th>#</th>
//                               <th>Feeder Name</th>
//                               <th>Ampacity</th>
//                               <th>Location</th>
//                               <th>Coordinates</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {selectedInstallation.lv_feeders.map((feeder) => (
//                               <tr key={feeder.feeder_id}>
//                                 <td>{feeder.feeder_number}</td>
//                                 <td><strong>{feeder.feeder_name}</strong></td>
//                                 <td>{feeder.ampacity}</td>
//                                 <td><small>{feeder.gis_location}</small></td>
//                                 <td>
//                                   <small>
//                                     Lat: {feeder.latitude}<br />
//                                     Lon: {feeder.longitude}
//                                   </small>
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InstalledKits;
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const InstalledKits = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [installations, setInstallations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statistics, setStatistics] = useState(null);

//   useEffect(() => {
//     const userData = localStorage.getItem('user');
//     if (userData) {
//       setUser(JSON.parse(userData));
//     }
//     fetchInstallations();
//     fetchStatistics();
//   }, []);

//   const fetchInstallations = async () => {
//     const token = localStorage.getItem('token');
    
//     try {
//       const response = await fetch('http://localhost:5000/api/installations', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       const data = await response.json();
      
//       if (data.success) {
//         setInstallations(data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching installations:', error);
//       alert('❌ Error loading installations');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchStatistics = async () => {
//     const token = localStorage.getItem('token');
    
//     try {
//       const response = await fetch('http://localhost:5000/api/statistics', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       const data = await response.json();
      
//       if (data.success) {
//         setStatistics(data.data);
//       }
//     } catch (error) {
//       console.error('Error fetching statistics:', error);
//     }
//   };

//   const handleSearch = async () => {
//     if (!searchTerm.trim()) {
//       fetchInstallations();
//       return;
//     }

//     const token = localStorage.getItem('token');
//     setLoading(true);

//     try {
//       const response = await fetch(`http://localhost:5000/api/installations/search/${searchTerm}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       const data = await response.json();
      
//       if (data.success) {
//         setInstallations(data.data);
//       }
//     } catch (error) {
//       console.error('Error searching:', error);
//       alert('❌ Error searching installations');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleString('en-IN', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   return (
//     <div className="app-container">
//       {/* Navbar */}
//       <nav className="navbar navbar-dark bg-dark">
//         <div className="container-fluid">
//           <span className="navbar-brand mb-0 h1">📡 Meter Kit Installer Portal</span>
//           <div className="d-flex align-items-center gap-3">
//             {user && (
//               <>
//                 <span className="text-white">
//                   👤 {user.fullName || user.username}
//                 </span>
//                 <button 
//                   className="btn btn-warning btn-sm"
//                   onClick={() => navigate('/dashboard')}
//                 >
//                   ➕ New Installation
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
//         <h2 className="text-center text-white mb-4 display-5">
//           📋 Installed Meter Kits
//         </h2>

//         {/* Statistics Cards */}
//         {statistics && (
//           <div className="row g-3 mb-4">
//             <div className="col-md-3">
//               <div className="card text-center shadow">
//                 <div className="card-body">
//                   <h3 className="text-primary">{statistics.total_installations}</h3>
//                   <p className="mb-0">Total Installations</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="card text-center shadow">
//                 <div className="card-body">
//                   <h3 className="text-success">{statistics.active_installations}</h3>
//                   <p className="mb-0">Active Installations</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="card text-center shadow">
//                 <div className="card-body">
//                   <h3 className="text-info">{statistics.total_lv_feeders}</h3>
//                   <p className="mb-0">Total LV Feeders</p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-3">
//               <div className="card text-center shadow">
//                 <div className="card-body">
//                   <h3 className="text-warning">{statistics.unique_gss_locations}</h3>
//                   <p className="mb-0">GSS Locations</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Search Bar */}
//         <div className="card shadow-lg mb-4">
//           <div className="card-body">
//             <div className="row g-2">
//               <div className="col-md-10">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Search by GSS, MV Feeder, DT Name, Serial No, or Installer..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//                 />
//               </div>
//               <div className="col-md-2">
//                 <button 
//                   className="btn btn-primary w-100"
//                   onClick={handleSearch}
//                 >
//                   🔍 Search
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Installations List */}
//         {loading ? (
//           <div className="text-center text-white">
//             <div className="spinner-border" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <p className="mt-2">Loading installations...</p>
//           </div>
//         ) : installations.length === 0 ? (
//           <div className="card shadow-lg">
//             <div className="card-body text-center py-5">
//               <h4>No installations found</h4>
//               <p className="text-muted">Start by adding a new meter kit installation</p>
//               <button 
//                 className="btn btn-success"
//                 onClick={() => navigate('/dashboard')}
//               >
//                 ➕ Add New Installation
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="row g-3">
//             {installations.map((installation) => (
//               <div key={installation.substation_id} className="col-md-6 col-lg-4">
//                 <div className="card shadow h-100">
//                   <div className="card-header bg-primary text-white">
//                     <h6 className="mb-0">🏭 {installation.dt_name}</h6>
//                   </div>
//                   <div className="card-body">
//                     <p className="mb-2">
//                       <strong>Serial No:</strong> {installation.mkit_serial_no}
//                     </p>
//                     <p className="mb-2">
//                       <strong>GSS:</strong> {installation.gss}
//                     </p>
//                     <p className="mb-2">
//                       <strong>MV Feeder:</strong> {installation.mv_feeder}
//                     </p>
//                     <p className="mb-2">
//                       <strong>LV Feeders:</strong> {installation.total_lv_feeders}
//                     </p>
//                     <p className="mb-2">
//                       <strong>Installer:</strong> {installation.installer_name}
//                     </p>
//                     <p className="mb-2">
//                       <strong>Status:</strong>{' '}
//                       <span className={`badge ${installation.status === 'Active' ? 'bg-success' : 'bg-secondary'}`}>
//                         {installation.status}
//                       </span>
//                     </p>
//                     <p className="mb-0 text-muted small">
//                       <strong>Installed:</strong> {formatDate(installation.installation_date)}
//                     </p>
//                   </div>
//                   <div className="card-footer">
//                     <details>
//                       <summary className="btn btn-sm btn-outline-info w-100">
//                         View LV Feeders
//                       </summary>
//                       <div className="mt-2">
//                         {installation.lv_feeders.map((feeder, idx) => (
//                           <div key={idx} className="border-bottom py-2">
//                             <small>
//                               <strong>{feeder.feeder_name}</strong> - {feeder.ampacity}
//                               <br />
//                               📍 {feeder.gis_location}
//                             </small>
//                           </div>
//                         ))}
//                       </div>
//                     </details>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <footer className="bg-dark text-white text-center py-3 mt-4">
//         <p className="mb-0">© 2024 Meter Kit Installer | Powered by NPD QA Team</p>
//       </footer>
//     </div>
//   );
// };

// export default InstalledKits;
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function InstalledKits() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [installations, setInstallations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statistics, setStatistics] = useState(null);
  const [selectedInstallation, setSelectedInstallation] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
    fetchInstallations();
    fetchStatistics();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const fetchInstallations = async () => {
    const token = localStorage.getItem('token');
    
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/installations`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();

      if (result.success) {
        setInstallations(result.data);
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('Error fetching installations. Please check if server is running!');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchStatistics = async () => {
    const token = localStorage.getItem('token');
    
    try {
      const response = await fetch(`${API_URL}/api/statistics`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      
      if (result.success) {
        setStatistics(result.data);
      }
    } catch (err) {
      console.error('Statistics fetch error:', err);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchInstallations();
      return;
    }

    const token = localStorage.getItem('token');

    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/installations/search/${searchTerm}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();

      if (result.success) {
        setInstallations(result.data);
      }
    } catch (err) {
      setError('Error searching installations');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const viewDetails = (installation) => {
    setSelectedInstallation(installation);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN') + ' ' + date.toLocaleTimeString('en-IN');
  };

  if (loading && installations.length === 0) {
    return (
      <div className="container-fluid py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading installed meter kits...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-fluid py-5">
        <div className="alert alert-danger text-center" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>{error}</p>
          <button className="btn btn-primary mt-3" onClick={fetchInstallations}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1"> Meter Kit Installer Portal</span>
          <div className="d-flex align-items-center gap-2">
            {user && (
              <>
                <span className="text-white me-2">
                  👤 {user.fullName || user.username}
                </span>
                <button 
                  className="btn btn-warning btn-sm"
                  onClick={() => navigate('/dashboard')}
                >
                  + New Installation
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

      <div className="container-fluid py-4">
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold text-black"> Active Installed Meter Kits</h1>
          <p className="text-black">View all active meter kit installations and their locations</p>
        </div>

        {statistics && (
          <div className="row mb-4">
            <div className="col-md-3 mb-3">
              <div className="card bg-primary text-white shadow-sm">
                <div className="card-body text-center">
                  <h3 className="display-6 fw-bold">{statistics.active_installations}</h3>
                  <p className="mb-0">Active Installations</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-success text-white shadow-sm">
                <div className="card-body text-center">
                  <h3 className="display-6 fw-bold">{statistics.total_lv_feeders}</h3>
                  <p className="mb-0">Total LV Feeders</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-info text-white shadow-sm">
                <div className="card-body text-center">
                  <h3 className="display-6 fw-bold">{statistics.unique_gss_locations}</h3>
                  <p className="mb-0">Unique GSS Locations</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-warning text-white shadow-sm">
                <div className="card-body text-center">
                  <h3 className="display-6 fw-bold">{statistics.total_installers}</h3>
                  <p className="mb-0">Total Installers</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row mb-4">
          <div className="col-md-8 mx-auto">
            <div className="input-group shadow-sm">
              <input 
                type="text" 
                className="form-control"
                placeholder="Search by GSS, MV Feeder, DT Name, Serial No, or Installer Name..."
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()} 
              />
              <button className="btn btn-primary" onClick={handleSearch}>🔍 Search</button>
              <button className="btn btn-outline-secondary" onClick={fetchInstallations}>🔄 Refresh</button>
            </div>
          </div>
        </div>

        {installations.length === 0 ? (
          <div className="alert alert-info text-center">
            <h4>No installations found</h4>
            <p>Start by adding new meter kit installations from the Dashboard</p>
          </div>
        ) : (
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">
              <h5 className="mb-0">📊 Installation Records ({installations.length})</h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover table-striped mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>#</th>
                      <th>M.Kit Serial No</th>
                      <th>GSS</th>
                      <th>MV Feeder</th>
                      <th>DT Name</th>
                      <th>Location</th>
                      <th>LV Feeders</th>
                      <th>Installer</th>
                      <th>Installation Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {installations.map((installation, index) => (
                      <tr key={installation.substation_id}>
                        <td>{index + 1}</td>
                        <td><strong className="text-primary">{installation.mkit_serial_no}</strong></td>
                        <td>{installation.gss}</td>
                        <td>{installation.mv_feeder}</td>
                        <td>{installation.dt_name}</td>
                        <td><small className="text-muted">{installation.substation_location}</small></td>
                        <td><span className="badge bg-info">{installation.total_lv_feeders}</span></td>
                        <td>{installation.installer_name || 'N/A'}</td>
                        <td><small>{formatDate(installation.installation_date)}</small></td>
                        <td>
                          <span className={`badge ${installation.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                            {installation.status}
                          </span>
                        </td>
                        <td>
                          <button 
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => viewDetails(installation)}
                            data-bs-toggle="modal" 
                            data-bs-target="#detailsModal"
                          >
                            👁️ View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <div className="modal fade" id="detailsModal" tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">📋 Installation Details - {selectedInstallation?.mkit_serial_no}</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                {selectedInstallation && (
                  <>
                    <div className="card mb-3">
                      <div className="card-header bg-dark text-white">
                        <h6 className="mb-0">📍 Substation Information</h6>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 mb-2"><strong>GSS:</strong> {selectedInstallation.gss}</div>
                          <div className="col-md-6 mb-2"><strong>MV Feeder:</strong> {selectedInstallation.mv_feeder}</div>
                          <div className="col-md-6 mb-2"><strong>DT Name:</strong> {selectedInstallation.dt_name}</div>
                          <div className="col-md-6 mb-2"><strong>M.Kit Serial No:</strong> {selectedInstallation.mkit_serial_no}</div>
                          <div className="col-12 mb-2"><strong>Location:</strong> {selectedInstallation.substation_location}</div>
                          <div className="col-md-6 mb-2"><strong>Latitude:</strong> {selectedInstallation.sub_latitude}</div>
                          <div className="col-md-6 mb-2"><strong>Longitude:</strong> {selectedInstallation.sub_longitude}</div>
                          <div className="col-md-6 mb-2"><strong>Installer:</strong> {selectedInstallation.installer_name}</div>
                          <div className="col-md-6 mb-2"><strong>Date:</strong> {formatDate(selectedInstallation.installation_date)}</div>
                        </div>
                      </div>
                    </div>

                    <div className="card">
                      <div className="card-header bg-dark text-white">
                        <h6 className="mb-0">⚡ LV Feeders ({selectedInstallation.total_lv_feeders})</h6>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-sm table-bordered">
                            <thead className="table-light">
                              <tr>
                                <th>#</th>
                                <th>Feeder Name</th>
                                <th>Ampacity</th>
                                <th>Location</th>
                                <th>Coordinates</th>
                              </tr>
                            </thead>
                            <tbody>
                              {selectedInstallation.lv_feeders.map((feeder) => (
                                <tr key={feeder.feeder_id}>
                                  <td>{feeder.feeder_number}</td>
                                  <td><strong>{feeder.feeder_name}</strong></td>
                                  <td>{feeder.ampacity}</td>
                                  <td><small>{feeder.gis_location}</small></td>
                                  <td>
                                    <small>
                                      Lat: {feeder.latitude}<br />
                                      Lon: {feeder.longitude}
                                    </small>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        <p className="mb-0">© 2024 Meter Kit Installer | Powered by NPD QA Team</p>
      </footer>
    </div>
  );
}

export default InstalledKits;