// import React from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';


// const items = [
//   {

//     title: 'Get started',
//     links: [
//       { href: '/docs/overview', children: 'What is NXT?' },
//       { href: '/docs/sandbox', children: 'Setup an account' },
//       { href: '/docs/getting-started', children: 'Login' },



//       // { href: '/sandbox', children: 'Try it out' }
//     ]
//   },
//   {
//     title: 'User Guide',
//     links: [

//       { href: '/docs/nodes', children: 'Workspace' },
//       { href: '/docs/tags', children: 'Project' },
//       { href: '/docs/attributes', children: 'Collection' },
//       { href: '/docs/soapcollection', children: 'soapCollection' },
//       { href: '/docs/variables', children: 'Operation' },
//       { href: '/docs/functions', children: 'Permission' },
//       {
//         href: '/docs/render',
//         children: 'Report'
//       },
//       { href: '/docs/syntax', children: 'Roles' },
//       {
//         href: '/docs/config',
//         children: 'Settings'
//       },
//       { href: '/docs/validation', children: 'Account' },

//     ]
//   },
//   {
//     title: 'Integration guides',
//     links: [
//       { href: '/docs/examples', children: 'Common examples' },
//       { href: '/docs/examples/html', children: 'Using with HTML' },
//       { href: '/docs/nextjs', children: 'Using with Next.js' },
//       { href: '/docs/examples/react', children: 'Using with React' }
//     ]
//   },
//   {
//     title: 'Advanced concepts',
//     links: [
//       { href: '/docs/frontmatter', children: 'Frontmatter' },
//       { href: '/docs/partials', children: 'Partials' },
//       { href: '/docs/faq', children: 'FAQ' }
//     ]
//   }
// ];

// export function SideNav() {
//   const router = useRouter();

//   return (
//     <nav className="sidenav">
//       {items.map((item) => (
//         <div key={item.title}>
//           <h3>{item.title}</h3>
//           <ul className="flex column">
//             {item.links.map((link) => {
//               const active = router.pathname === link.href;
//               return (
//                 <li key={link.href} className={active ? 'active' : ''}>
//                   <Link {...link}>
//                     <a href={link.href}>{link.children}</a>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       ))}
//       <style jsx>
//         {`
//           nav {
//             /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
//             position: sticky;
//             top: var(--nav-height);
//             height: calc(100vh - var(--nav-height));
//             flex: 0 0 240px;
//             overflow-y: auto;
//             padding: 2rem 0 2rem 2rem;
//           }
//           h3 {
//             font-weight: 500;
//             margin: 0.5rem 0 0;
//             padding-bottom: 0.5rem;
//           }
//           ul {
//             margin: 0;
//             padding: 0;
//           }
//           li {
//             list-style-type: none;
//             margin: 0 0 0.7rem 0.7rem;
//             font-size: 14px;
//             font-weight: 400;
//           }
//           li a {
//             text-decoration: none;
//           }
//           li a:hover,
//           li.active > a {
//             text-decoration: underline;
//           }
//           @media screen and (max-width: 600px) {
//             nav {
//               display: none;
//             }
//           }
//         `}
//       </style>
//     </nav>
//   );
// }

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';


const items = [
  {

    title: 'Get started',
    links: [
      { href: '/docs/overview', children: 'What is NXT?' },
      { href: '/docs/sandbox', children: 'Setup an Account' },
      { href: '/docs/getting-started', children: 'Login' },
      { href: '/docs/homepage', children: 'Homepage' }



      // { href: '/sandbox', children: 'Try it out' }
    ]
  },
  {
    title: 'User Guide',
    links: [

      {
        href: '/docs/nodes', children: 'Workspace', treeView: true, subChilds: [
          { href: '/docs/invite-workspace', children: 'Invite Workspace' }
          
        ]
      },
      {
        href: '/docs/tags', children: 'Project', treeView: true, subChilds: [
          { href: '/docs/invite-project', children: 'Invite Project' }
          
        ]
      },
      {
        href: '/docs/attributes', children: 'Collection', treeView: true, subChilds: [
          { href: '/docs/soapcollection', children: 'Soap Collection' },
          { href: '/docs/jsoncollection', children: 'Json Collection' }
        ]
      },

      {
        href: '/docs/variables', children: 'Operation', treeView: true, subChilds: [
          { href: '/docs/soapoperation', children: 'Soap Operation' },
          { href: '/docs/jsonoperation', children: 'Json Operation' }
        ]
      },
      {
        href: '/docs/Composite', children: 'Composite'
      },
      {
        href: '/docs/publish', children: 'Publish'
      },
      {
        href: '/docs/sdk', children: 'SDK Documentations'
      },
      { href: '/docs/syntax', children: 'API collections' },
      { href: '/docs/functions', children: 'Permission' },
      {
        href: '/docs/render',
        children: 'Report'
      },
     
      {
        href: '/docs/Settings',
        children: 'Settings'
      },
      { href: '/docs/Account', children: 'Account' },
      { href: '/docs/logoff', children: 'Logoff' },
      { href: '/docs/faq', children: 'FAQ' }
      
    ]
  }
];


const items2 = [
  {
    title: '',
    links: [
    
    ]
  },
  {
    title: '',
    links: [
      
      
    ]
  }
];

export function SideNav() {
  const [expanded, setExpanded] = useState({});
  const router = useRouter();

  const toggleExpand = (title) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [title]: !prevExpanded[title],
    }));
  };


  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>

          <h3>{item.title}</h3>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <>
                  {link?.treeView ? (<>


                    <li key={link.children} className={active ? 'active' : ''}  >
                    <Link {...link}>
                      <a
                    href={link.href}

                        className="tree-item"
                        onClick={() => toggleExpand(link.children)}
                      >
                        {expanded[link.children] ? '⮝' : '⮞'} {link.children}

                      </a>
                      </Link>
                      {expanded[link.children] && (
                        <ul style={{ padding: "0"}}>
                          {link.subChilds.map((subLink) => (
                            <li style={{ marginBottom: "0px" ,marginTop:"5px" }} key={subLink.href}>
                                 <Link {...subLink}>
                              <a href={subLink.href}>{subLink.children}</a>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>


                  </>) : <>    <li key={link.href} className={active ? 'active' : ''}>
                    <Link {...link}>
                      <a href={link.href}>{link.children}</a>
                    </Link>
                  </li></>}

                </>
              );
            })}
          </ul>
        </div>
      ))}

      {/* 
      <div className="treeview">
        {items1.map((items1) => (
          <ul key={items1.title}>
            <li
              className="tree-item"
              onClick={() => toggleExpand(items1.title)}
            >
              {expanded[items1.title] ? '⮝' : '⮞'} {items1.title}

            </li>
            {expanded[items1.title] && (
              <ul>
                {items1.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.children}</a>
                  </li>
                ))}
              </ul>
            )}
          </ul>
        ))}
      </div> */}


      {items2.map((items2) => (
        <div key={items2.title}>
          <h3>{items2.title}</h3>
          <ul className="flex column">
            {items2.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link}>
                    <a href={link.href}>{link.children}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}


      <style jsx>
        {`
          nav {
            /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
            position: sticky;
            top: var(--nav-height);
            height: calc(100vh - var(--nav-height));
            flex: 0 0 240px;
            overflow-y: auto;
            padding: 2rem 0 2rem 2rem;
          }
          h3 {
            font-weight: 500;
            margin: 0.5rem 0 0;
            padding-bottom: 0.5rem;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style-type: none;
            margin: 0 0 0.7rem 0.7rem;
            font-size: 14px;
            font-weight: 400;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active > a {
            text-decoration: underline;
          }
          @media screen and (max-width: 600px) {
            nav {
              display: none;
            }
          }

          .treeview {
            margin-top: 20px;
          }
          .tree-item {
            cursor: pointer;
     
          }
          ul {
            list-style-type: none;
            padding-left: 20px;
          }
          
       
         
        `}
      </style>
    </nav>
  );
}


