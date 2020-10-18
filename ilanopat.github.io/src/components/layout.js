// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/
//  */

// import React from "react"
// // import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import Sun from './icons/Sun';
// import Moon from './icons/Moon';

// import Header from "./Header"
// import Footer from "./Footer"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)
//   return (
//     <div>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div>
//         <button type="button">
//           {localStorage.getItem('theme-color-mode')==='light'?(<Moon width={30} />):<Sun width={30}/> }
//         </button>
//       </div> 

//       <div
//       >
//         <main>{children}</main>
//       </div>
//       <Footer/>
//     </div>
//   )
// }

// // Layout.propTypes = {
// //   children: PropTypes.node.isRequired,
// // }

// export default Layout;
