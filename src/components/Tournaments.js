import React from 'react';
import './Tournaments.css';

const Tournaments = () => {
  return (
    <section className="tournaments">
      <section id="tournaments">
        <h2>Tournaments</h2>
        <p>
          We hold both target tournaments and hunting tournaments. Different divisions
          are available, please see below for details. For hunting tournaments, we only
          hunt Wild Boar, which are an overpopulated pest on this mountain and have been
          deemed a cull-on-sight animal by Nagano's Department of Game and Fisheries.
          No unnecessary suffering of target animals is permitted, and only clean kills
          will be admitted to the tournament. Anyone found breaking these rules will be
          banned for life.
        </p>
        <table>
          <thead>
            <tr>
              <th>Division</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Midsommer Apple Target Shooting</td>
              <td>Weekend before Obon</td>
            </tr>
            <tr>
              <td>Midwinter Madness</td>
              <td>First weekend of January</td>
            </tr>
            <tr>
              <td>Largest Boar</td>
              <td>October 3rd</td>
            </tr>
            <tr>
              <td>Largest Boar (Night Tournament)</td>
              <td>October 31st/November 1st</td>
            </tr>
            <tr>
              <td>Biggest Fish of the Month</td>
              <td>Decided last day of each month</td>
            </tr>
            <tr>
              <td>Various Exhibition Tournaments</td>
              <td>Visit the Club for details</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default Tournaments;
