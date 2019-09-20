import React from "react";
import { relative } from "path";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <div className="heading">
                    <h1>
                      Book unique places to
                      <br /> stay and things to do.
                    </h1>
                  </div>
                  <div className="form-body">
                    <form action="#">
                      <div>
                        <label htmlFor="where">
                          <div className="label">WHERE</div>
                          <div id="where" className="input-box">
                            <input type="text" placeholder="Anywhere" />
                          </div>
                        </label>
                      </div>
                      <div
                        style={{
                          marginTop: "16px",
                          marginBottom: "16px",
                          width: "100%"
                        }}
                      >
                        <div style={{ width: "50%", display: "inline-block" }}>
                          <label htmlFor="check-in">
                            <div className="label">CHECK IN</div>
                            <div id="check-in" className="input-box">
                              <input type="date" placeholder="mm/dd/yyyy" />
                            </div>
                          </label>
                        </div>
                        <div style={{ width: "50%", display: "inline-block" }}>
                          <label htmlFor="check-out">
                            <div className="label">CHECK IN</div>
                            <div id="check-out" className="input-box">
                              <input type="date" placeholder="mm/dd/yyyy" />
                            </div>
                          </label>
                        </div>
                      </div>
                      <div
                        style={{
                          marginTop: "16px",
                          marginBottom: "16px",
                          width: "100%"
                        }}
                      >
                        <label htmlFor="guests">
                          <div className="label">GUESTS</div>
                          <div id="guests" className="input-box">
                            <select>
                              <option value="" hidden>
                                Guests
                              </option>
                              <option value="adults">Adults</option>
                              <option value="children">Children</option>
                              <option value="infants">Infants</option>
                            </select>
                          </div>
                        </label>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          marginBottom: "0",
                          marginTop: "16px"
                        }}
                      >
                        <div
                          className="input-box"
                          style={{
                            padding: 0,
                            border: 0
                          }}
                        >
                          <button className="button">Search</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          color: "#fff",
          fontSize: "14px",
          width: "153px",
          textAlign: "right",
          position: "absolute",
          right: "24px",
          bottom: "24px"
        }}
      >
        Over 300 unique places to stay in Oregon
      </div>
    </section>
  );
};

export default Home;
