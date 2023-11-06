import React from 'react';
import { DocSearch } from '@docsearch/react';

import { AppLink as Link } from '../AppLink';

function Search() {
  return (
    <DocSearch
      appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID}
      apiKey={process.env.NEXT_PUBLIC_ALGOLIA_API_KEY}
      indexName="markdoc"
    />
  );
}

export function TopNav({ children }) {
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  return (
    <div className="nav-bar">
      <nav>
        <div className="flex top-row">
          <Link href="/" className="flex">
          <svg width="80" height="45" viewBox="0 0 2489 1298" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M434 188L802.31 375.203C835.865 392.257 857 426.709 857 464.348V649.5L487.447 455.113C454.58 437.825 434 403.747 434 366.61V188Z" fill="var(--theme)"/>
<path d="M0 563L378.506 751.118C412.503 768.015 434 802.705 434 840.668V1026L54.2614 830.686C20.9435 813.549 0 779.225 0 741.759V563Z" fill="var(--theme)"/>
<path d="M0 252L804.293 683.709C836.749 701.13 857 734.983 857 771.819V953L52.583 519.77C20.1959 502.327 0 468.512 0 431.726V252Z" fill="var(--theme)"/>
<path d="M1274.75 520.25C1327.88 520.25 1370.2 537.781 1401.72 572.844C1433.59 607.552 1449.53 653.417 1449.53 710.438V1026H1319.38V723.719C1319.38 691.49 1311.58 665.99 1296 647.219C1280.77 628.448 1259.88 619.062 1233.31 619.062C1213.12 619.062 1194.18 625.083 1176.47 637.125C1158.76 648.812 1139.28 668.469 1118.03 696.094V1026H987.344V529.812H1118.03V599.406C1142.11 571.073 1166.73 550.885 1191.88 538.844C1217.38 526.448 1245 520.25 1274.75 520.25ZM1669.47 529.812L1793.25 685.469L1912.25 529.812H2068.97L1869.75 773.656L2083.84 1026H1927.12L1793.25 861.844L1665.22 1026H1512.75L1718.34 773.656L1512.75 529.812H1669.47ZM2287.84 398.062H2298.47V529.812H2468.47V628.625H2298.47V857.594C2298.47 879.906 2305.2 897.969 2318.66 911.781C2332.11 925.594 2350.53 932.5 2373.91 932.5C2404.36 932.5 2439.43 921.521 2479.09 899.562V1004.22C2431.99 1025.11 2387.72 1035.56 2346.28 1035.56C2290.32 1035.56 2246.58 1020.33 2215.06 989.875C2183.9 959.417 2168.31 918.156 2168.31 866.094V628.625H2090.75V607.375L2287.84 398.062Z" fill="var(--theme)"/>

<path d="M434 188L802.31 375.203C835.865 392.257 857 426.709 857 464.348V649.5L487.447 455.113C454.58 437.825 434 403.747 434 366.61V188Z" fill="var(--dark)"/>
<path d="M0 563L378.506 751.118C412.503 768.015 434 802.705 434 840.668V1026L54.2614 830.686C20.9435 813.549 0 779.225 0 741.759V563Z" fill="var(--dark)"/>
<path d="M0 252L804.293 683.709C836.749 701.13 857 734.983 857 771.819V953L52.583 519.77C20.1959 502.327 0 468.512 0 431.726V252Z" fill="var(--dark)"/>
<path d="M1274.75 520.25C1327.88 520.25 1370.2 537.781 1401.72 572.844C1433.59 607.552 1449.53 653.417 1449.53 710.438V1026H1319.38V723.719C1319.38 691.49 1311.58 665.99 1296 647.219C1280.77 628.448 1259.88 619.062 1233.31 619.062C1213.12 619.062 1194.18 625.083 1176.47 637.125C1158.76 648.812 1139.28 668.469 1118.03 696.094V1026H987.344V529.812H1118.03V599.406C1142.11 571.073 1166.73 550.885 1191.88 538.844C1217.38 526.448 1245 520.25 1274.75 520.25ZM1669.47 529.812L1793.25 685.469L1912.25 529.812H2068.97L1869.75 773.656L2083.84 1026H1927.12L1793.25 861.844L1665.22 1026H1512.75L1718.34 773.656L1512.75 529.812H1669.47ZM2287.84 398.062H2298.47V529.812H2468.47V628.625H2298.47V857.594C2298.47 879.906 2305.2 897.969 2318.66 911.781C2332.11 925.594 2350.53 932.5 2373.91 932.5C2404.36 932.5 2439.43 921.521 2479.09 899.562V1004.22C2431.99 1025.11 2387.72 1035.56 2346.28 1035.56C2290.32 1035.56 2246.58 1020.33 2215.06 989.875C2183.9 959.417 2168.31 918.156 2168.31 866.094V628.625H2090.75V607.375L2287.84 398.062Z" fill="var(--dark)"/>

</svg>



          </Link>
          <button
            className="hamburger"
            onClick={() => setShowMobileNav((o) => !o)}
          >
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="16" height="2" fill="var(--black)" />
              <rect y="4" width="16" height="2" fill="var(--black)" />
              <rect y="8" width="16" height="2" fill="var(--black)" />
            </svg>
          </button>
        </div>
        <section className={showMobileNav ? 'active' : ''}>
          {children}
          <Search />
        </section>
      </nav>
      <style jsx>
        {`
          .nav-bar {
            top: 0;
            position: fixed;
            z-index: 100;
            display: flex;
            width: 100%;
            background: var(--light);
          }
          nav {
            display: flex;
            gap: 1rem;
            width: 100%;
            margin: 0 auto;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid var(--dark);
            padding: 1rem 2rem 1.1rem;
            font-size: 15px;
            font-family: var(--sans);
          }
          nav :global(a) {
            text-decoration: none;
          }
          nav :global(.DocSearch-Button) {
            background: var(--code-background);
            height: 32px;
            border-radius: 32px;
          }
          nav :global(.DocSearch-Button:hover) {
            box-shadow: none;
            background: #e8eef3;
          }
          :global(.dark) nav :global(.DocSearch-Button:hover) {
            background: #424248;
          }
          nav :global(.DocSearch-Search-Icon) {
            color: var(--dark);
            width: 16px;
          }
          nav :global(.DocSearch-Button-Placeholder),
          nav :global(.DocSearch-Button-Keys) {
            display: none;
          }
          section {
            display: flex;
            align-items: center;
            gap: 1.3rem;
            padding: 0;
          }
          button {
            display: none;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 32px;
            background: var(--gray-light);
            border-radius: 30px;
          }
          .top-row {
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }
          @media screen and (max-width: 600px) {
            .nav-bar {
              border-bottom: 1px solid var(--dark);
            }
            nav {
              flex-direction: column;
              align-items: flex-start;
              border-bottom: none;
            }
            section {
              display: none;
              font-size: 15px;
            }
            section.active {
              display: flex;
            }
            button {
              display: flex;
            }
          }
        `}
      </style>
    </div>
  );
}
