"use strict";(self.webpackChunkfhir_demo_2023=self.webpackChunkfhir_demo_2023||[]).push([[462],{2186:function(e,t,L){L.d(t,{Z:function(){return j}});L(7207);var M=L(7294),a=L(4160),i=L(6226),u=L(3516),s=L(5867),r=L(6774);const l=(0,a.dq)("/");function j(e){let{children:t,location:L}=e;const{search:j,pathname:n}=L,{selectedFeatures:c={}}=M.useContext(s.Ym),o=Object.keys(c).sort(),w=Object.keys(u.D).filter((e=>{var t;return!o.length||(null===(t=u.D[e].features)||void 0===t?void 0:t.some((e=>o.some((t=>t===e)))))})),y=w.indexOf(n.replace(l,"").replaceAll("/","")),N=w.length>1?M.createElement("nav",{className:"prevNext"},M.createElement("div",null,y>0?M.createElement(a.rU,{to:"/"+w[y-1]+j},"Previous ",M.createElement("img",{src:r.Z,alt:""})):M.createElement(a.rU,{to:"/"+w[w.length-1]+j},"Last ",M.createElement("img",{src:r.Z,alt:""}))),M.createElement("div",null,y<w.length-1?M.createElement(a.rU,{to:"/"+w[y+1]+j},"Next ",M.createElement("img",{src:r.Z,alt:""})):M.createElement(a.rU,{to:"/"+w[0]+j},"First",M.createElement("img",{src:r.Z,alt:""})))):null;return M.createElement(i.Z,null,M.createElement("header",null,o.length?M.createElement(M.Fragment,null,M.createElement("hr",null),M.createElement("h3",null,"Showing demos with feature"+(o.length>1?"s":"")+":"),M.createElement(s.ZP,{list:o}),M.createElement("hr",null)):null,N),M.createElement("main",{className:"demo"},t),N,M.createElement("img",{className:"decoration",src:r.Z,alt:""}))}},1646:function(e,t,L){L.r(t),L.d(t,{Head:function(){return r},default:function(){return l}});var M=L(7294),a=L(2186),i=L(5867),u=L(3516),s="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDMzNy42IDcyIj4KPHBhdGggZmlsbD0iIzczNzM3MyIgZD0iTTE0MC40LDE0LjR2NDMuMmgtNy41VjIzLjdoLTAuMWwtMTMuNCwzMy45aC01bC0xMy43LTMzLjloLTAuMXYzMy45aC02LjlWMTQuNGgxMC44bDEyLjQsMzJoMC4ybDEzLjEtMzJIMTQwLjQgeiBNMTQ2LjYsMTcuN2MwLTEuMiwwLjQtMi4yLDEuMy0zYzAuOS0wLjgsMS45LTEuMiwzLjEtMS4yYzEuMywwLDIuNCwwLjQsMy4yLDEuMnMxLjMsMS44LDEuMywzYzAsMS4yLTAuNCwyLjItMS4zLDMgYy0wLjksMC44LTEuOSwxLjItMy4yLDEuMnMtMi4zLTAuNC0zLjEtMS4yQzE0Ny4xLDE5LjgsMTQ2LjYsMTguOCwxNDYuNiwxNy43eiBNMTU0LjcsMjYuNnYzMWgtNy4zdi0zMUgxNTQuN3ogTTE3Ni44LDUyLjMgYzEuMSwwLDIuMy0wLjIsMy42LTAuOGMxLjMtMC41LDIuNS0xLjIsMy42LTJ2Ni44Yy0xLjIsMC43LTIuNSwxLjItNCwxLjVjLTEuNSwwLjMtMy4xLDAuNS00LjksMC41Yy00LjYsMC04LjMtMS40LTExLjEtNC4zIGMtMi45LTIuOS00LjMtNi42LTQuMy0xMWMwLTUsMS41LTkuMSw0LjQtMTIuM2MyLjktMy4yLDctNC44LDEyLjQtNC44YzEuNCwwLDIuOCwwLjIsNC4xLDAuNWMxLjQsMC4zLDIuNSwwLjgsMy4zLDEuMnY3IGMtMS4xLTAuOC0yLjMtMS41LTMuNC0xLjljLTEuMi0wLjQtMi40LTAuNy0zLjYtMC43Yy0yLjksMC01LjIsMC45LTcsMi44cy0yLjYsNC40LTIuNiw3LjZjMCwzLjEsMC45LDUuNiwyLjYsNy4zIEMxNzEuNiw1MS40LDE3My45LDUyLjMsMTc2LjgsNTIuM3ogTTIwNC43LDI2LjFjMC42LDAsMS4xLDAsMS42LDAuMXMwLjksMC4yLDEuMiwwLjN2Ny40Yy0wLjQtMC4zLTAuOS0wLjYtMS43LTAuOCBzLTEuNi0wLjQtMi43LTAuNGMtMS44LDAtMy4zLDAuOC00LjUsMi4zcy0xLjksMy44LTEuOSw3djE1LjZoLTcuM3YtMzFoNy4zdjQuOWgwLjFjMC43LTEuNywxLjctMywzLTQgQzIwMS4yLDI2LjYsMjAyLjgsMjYuMSwyMDQuNywyNi4xeiBNMjA3LjksNDIuNmMwLTUuMSwxLjUtOS4yLDQuMy0xMi4yYzIuOS0zLDYuOS00LjUsMTItNC41YzQuOCwwLDguNiwxLjQsMTEuMyw0LjMgczQuMSw2LjgsNC4xLDExLjdjMCw1LTEuNSw5LTQuMywxMmMtMi45LDMtNi44LDQuNS0xMS44LDQuNWMtNC44LDAtOC42LTEuNC0xMS40LTQuMkMyMDkuMyw1MS4zLDIwNy45LDQ3LjQsMjA3LjksNDIuNnogTTIxNS41LDQyLjNjMCwzLjIsMC43LDUuNywyLjIsNy40czMuNiwyLjYsNi4zLDIuNmMyLjYsMCw0LjctMC44LDYuMS0yLjZjMS40LTEuNywyLjEtNC4yLDIuMS03LjZjMC0zLjMtMC43LTUuOC0yLjEtNy42IGMtMS40LTEuNy0zLjUtMi42LTYtMi42Yy0yLjcsMC00LjcsMC45LTYuMiwyLjdDMjE2LjIsMzYuNSwyMTUuNSwzOSwyMTUuNSw0Mi4zeiBNMjUwLjUsMzQuOGMwLDEsMC4zLDEuOSwxLDIuNSBjMC43LDAuNiwyLjEsMS4zLDQuNCwyLjJjMi45LDEuMiw1LDIuNSw2LjEsMy45YzEuMiwxLjUsMS44LDMuMiwxLjgsNS4zYzAsMi45LTEuMSw1LjItMy40LDdjLTIuMiwxLjgtNS4zLDIuNi05LjEsMi42IGMtMS4zLDAtMi43LTAuMi00LjMtMC41Yy0xLjYtMC4zLTIuOS0wLjctNC0xLjJ2LTcuMmMxLjMsMC45LDIuOCwxLjcsNC4zLDIuMmMxLjUsMC41LDIuOSwwLjgsNC4yLDAuOGMxLjYsMCwyLjktMC4yLDMuNi0wLjcgYzAuOC0wLjUsMS4yLTEuMiwxLjItMi4zYzAtMS0wLjQtMS44LTEuMi0yLjZjLTAuOC0wLjctMi40LTEuNS00LjYtMi40Yy0yLjctMS4xLTQuNi0yLjQtNS43LTMuOHMtMS43LTMuMi0xLjctNS40IGMwLTIuOCwxLjEtNS4xLDMuMy02LjljMi4yLTEuOCw1LjEtMi43LDguNi0yLjdjMS4xLDAsMi4zLDAuMSwzLjYsMC40czIuNSwwLjYsMy40LDAuOVYzNGMtMS0wLjYtMi4xLTEuMi0zLjQtMS43IGMtMS4zLTAuNS0yLjYtMC43LTMuOC0wLjdjLTEuNCwwLTIuNSwwLjMtMy4yLDAuOEMyNTAuOSwzMy4xLDI1MC41LDMzLjgsMjUwLjUsMzQuOHogTTI2Ni45LDQyLjZjMC01LjEsMS41LTkuMiw0LjMtMTIuMiBjMi45LTMsNi45LTQuNSwxMi00LjVjNC44LDAsOC42LDEuNCwxMS4zLDQuM3M0LjEsNi44LDQuMSwxMS43YzAsNS0xLjUsOS00LjMsMTJjLTIuOSwzLTYuOCw0LjUtMTEuOCw0LjVjLTQuOCwwLTguNi0xLjQtMTEuNC00LjIgQzI2OC40LDUxLjMsMjY2LjksNDcuNCwyNjYuOSw0Mi42eiBNMjc0LjUsNDIuM2MwLDMuMiwwLjcsNS43LDIuMiw3LjRzMy42LDIuNiw2LjMsMi42YzIuNiwwLDQuNy0wLjgsNi4xLTIuNiBjMS40LTEuNywyLjEtNC4yLDIuMS03LjZjMC0zLjMtMC43LTUuOC0yLjEtNy42Yy0xLjQtMS43LTMuNS0yLjYtNi0yLjZjLTIuNywwLTQuNywwLjktNi4yLDIuN0MyNzUuMywzNi41LDI3NC41LDM5LDI3NC41LDQyLjN6IE0zMjIuOSwzMi42aC0xMC45djI1aC03LjR2LTI1aC01LjJ2LTZoNS4ydi00LjNjMC0zLjIsMS4xLTUuOSwzLjItOHM0LjgtMy4xLDguMS0zLjFjMC45LDAsMS43LDAuMSwyLjQsMC4xczEuMywwLjIsMS44LDAuNHY2LjMgYy0wLjItMC4xLTAuNy0wLjMtMS4zLTAuNWMtMC42LTAuMi0xLjMtMC4zLTIuMS0wLjNjLTEuNSwwLTIuNywwLjUtMy41LDEuNGMtMC44LDAuOS0xLjIsMi40LTEuMiw0LjJ2My43aDEwLjl2LTdsNy4zLTIuMnY5LjJoNy40IHY2aC03LjR2MTQuNWMwLDEuOSwwLjQsMy4yLDEsNGMwLjcsMC44LDEuOCwxLjIsMy4zLDEuMmMwLjQsMCwwLjktMC4xLDEuNS0wLjNjMC42LTAuMiwxLjEtMC40LDEuNS0wLjd2NmMtMC41LDAuMy0xLjIsMC41LTIuMywwLjcgYy0xLjEsMC4yLTIuMSwwLjMtMy4yLDAuM2MtMy4xLDAtNS40LTAuOC02LjktMi40Yy0xLjUtMS42LTIuMy00LjEtMi4zLTcuNEwzMjIuOSwzMi42TDMyMi45LDMyLjZ6Ii8+CjxyZWN0IGZpbGw9IiNGMjUwMjIiIHdpZHRoPSIzNC4yIiBoZWlnaHQ9IjM0LjIiLz4KPHJlY3QgeD0iMzcuOCIgZmlsbD0iIzdGQkEwMCIgd2lkdGg9IjM0LjIiIGhlaWdodD0iMzQuMiIvPgo8cmVjdCB5PSIzNy44IiBmaWxsPSIjMDBBNEVGIiB3aWR0aD0iMzQuMiIgaGVpZ2h0PSIzNC4yIi8+CjxyZWN0IHg9IjM3LjgiIHk9IjM3LjgiIGZpbGw9IiNGRkI5MDAiIHdpZHRoPSIzNC4yIiBoZWlnaHQ9IjM0LjIiLz4KPC9zdmc+Cg==";const r=()=>M.createElement("title",null,"FHIR Demo 2023: Microsoft");function l(e){let{location:t}=e;const L=u.D.microsoft.features;return M.createElement(a.Z,{features:L,location:t},M.createElement("h1",null,M.createElement("a",{href:"https://www.microsoft.com/"},M.createElement("img",{src:s,alt:"Microsoft"}))),M.createElement(i.ZP,{list:L}),M.createElement("p",null,"Microsoft presents two solutions:"),M.createElement("ul",null,M.createElement("li",null,"An open-source ",M.createElement("a",{href:"#fhir-server"},"FHIR server")," that can be used as a self-hosted server or as a managed solution."),M.createElement("li",null,"Several ",M.createElement("a",{href:"#analytics"},"data pipelines and analytics services")," that can be used to analyze and utilize available FHIR data.")),M.createElement("section",{id:"fhir-server"},M.createElement("h2",null,"FHIR Server"),M.createElement("p",null,"FHIR capabilities from Microsoft are available in three configurations:"),M.createElement("ul",null,M.createElement("li",null,"The ",M.createElement("strong",null,"FHIR service")," is a managed platform as a service (PaaS) that operates as part of Azure Health Data Services. In addition to the FHIR service, Azure Health Data Services includes managed services for other types of health data such as the DICOM service for medical imaging data and the MedTech service for medical IoT data. All services (FHIR service, DICOM service, and MedTech service) can be connected and administered within an Azure Health Data Services workspace."),M.createElement("li",null,"Azure API for FHIR is a managed FHIR server offered as a PaaS in Azure - easily provisioned in the Azure portal. Azure API for FHIR is not part of Azure Health Data Services and lacks some of the features of the FHIR service."),M.createElement("li",null,"FHIR Server for Azure, an open-source FHIR server that can be deployed into your Azure subscription, is available on GitHub at ",M.createElement("a",{href:"https://github.com/Microsoft/fhir-server"},"https://github.com/Microsoft/fhir-server"),".")),M.createElement("p",null,"For use cases that require customizing a FHIR server with admin access to the underlying services (e.g., access to the database without going through the FHIR API), developers should choose the open-source FHIR Server for Azure. For implementation of a turnkey, production-ready FHIR API with a provisioned database backend (i.e., data can only be accessed through the FHIR API - not the database directly), developers should choose the FHIR service."),M.createElement("div",{className:"media"},M.createElement("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/5vS7Iq9vpXE",title:"Azure API for FHIR (Fast Healthcare Interoperability Resources) | Azure Friday",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})),M.createElement("p",null,"See also the ",M.createElement("a",{href:"https://www.youtube.com/playlist?list=PLLasX02E8BPAgZj2cNnKftIH8kxj57_44"},"Microsoft Azure Health Data Services")," playlist on Youtube.")),M.createElement("section",{id:"analytics"},M.createElement("h2",null,"Data Pipelines and Analytics"),M.createElement("p",null,"Health researchers have embraced the FHIR standard as it gives the community a shared data model and removes barriers to assembling large datasets for machine learning and analytics. With the FHIR service's data conversion and PHI de-identification capabilities, researchers can prepare HIPAA-compliant data for secondary use before sending the data to Azure machine learning and analytics pipelines. The FHIR service's audit logging and alert mechanisms also play an important role in research workflows."),M.createElement("div",{className:"media"},M.createElement("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/oqJiuJaOIv4",title:"FHIR Demo 2023 - Microsoft",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}))),M.createElement("section",{id:"contact"},M.createElement("h3",null,"Contact"),M.createElement("div",{className:"business-card"},M.createElement("h3",null,"Aleksi Kuitunen"),M.createElement("p",null,"Health Lead at Microsoft"),M.createElement("address",null,M.createElement("a",{href:"mailto:aleksi.kuitunen@microsoft.com"},"aleksi.kuitunen@microsoft.com")))))}}}]);
//# sourceMappingURL=component---src-pages-microsoft-js-991b50e226cbb907766c.js.map