import React, { useRef } from 'react';
import Dashboard1 from './Dashboard1';
import Dashboard2 from './Dashboard2';
import Dashboard3 from './Dashboard3';
import Dashboard4 from './Dashboard4';
import { UserHomepage } from './UserHomepage';

export const CrimeViz = () => {
  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo(0, ref.current.offsetTop);
    }
  };

  const dashboard1Ref = useRef(null);
  const dashboard2Ref = useRef(null);
  const dashboard3Ref = useRef(null);
  const dashboard4Ref = useRef(null);

  return (
    <>
      <UserHomepage/>
      <div style={styles.container}>
        <table className="navigation-table" style={styles.navigationTable}>
          <tbody>
            <tr>
              <td colSpan="2" style={styles.navigationHeader}><b>Navigation Table</b></td>
            </tr>
            <tr>
              <td onClick={() => scrollToRef(dashboard1Ref)}>1. Crime in India</td>
              <td style={styles.dashboardBorder}><Dashboard1 /></td>
            </tr>
            <tr>
              <td onClick={() => scrollToRef(dashboard2Ref)}>2. Trends in Crime in India</td>
              <td style={styles.dashboardBorder}><Dashboard2 /></td>
            </tr>
            <tr>
              <td onClick={() => scrollToRef(dashboard3Ref)}>3. Crime Rate by State in India</td>
              <td style={styles.dashboardBorder}><Dashboard3 /></td>
            </tr>
            <tr>
              <td onClick={() => scrollToRef(dashboard4Ref)}>4. Trend in Crime Rate</td>
              <td style={styles.dashboardBorder}><Dashboard4 /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

// CSS styles
const styles = {
  container: {
    textAlign: 'center',
  },
  navigationTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  navigationHeader: {
    padding: '10px',
    fontWeight: 'bold',
    borderBottom: '2px solid #000',
  },
  dashboardBorder: {
    border: '1px solid #000',
    padding: '20px',
  },
};

export default CrimeViz;
