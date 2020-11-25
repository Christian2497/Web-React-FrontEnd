import React, { Component } from "react";
import { Link } from "react-router-dom";

class Calendar extends Component {
state = {
  week1:{
        monday: {
          id: "5fbaabb57e7eea1b1bec930b",
          title: "10 min Leg/Butt/Thight workout"
        },
        tuesday: {
          id: "",
          title: ""
        },
        wednesday: {
          id: "",
          title: ""
        },
        thursday: {
          id: "",
          title: ""
        },
        friday: {
          id: "5fb947cf70ce455b905e6e93",
          title: "Low impact, beginner, fat burning, home cardio workout."
        },
        },
  week2:{
        monday: {
          id: "5fbb7e592ac6bc21f4f75b81",
          title: "10min beginner leg workout"
        },
        tuesday: {
          id: "",
          title: ""
        },
        wednesday: {
          id: "",
          title: ""
        },
        thursday: {
          id: "5fba1eeaf8a37e9d8bf7ee83",
          title: "Total Body Toning Low Impact Cardio Workout"
        },
        friday: {
          id: "",
          title: ""
        },
        },
  week3:{
        monday: {
          id: "5fbb7acf2ac6bc21f4f75b80",
          title: "Leg Workout to Build Muscle From Home"
        },
        tuesday: {
          id: "",
          title: ""
        },
        wednesday: {
          id: "",
          title: ""
        },
        thursday: {
          id: "5fbaa23a7e7eea1b1bec9305",
          title: "30-Minute HIIT Cardio Workout"
        },
        friday: {
          id: "",
          title: ""
        },
        },
  week4:{
        monday: {
          id: "",
          title: ""
        },
        tuesday: {
          id: "",
          title: ""
        },
        wednesday: {
          id: "",
          title: ""
        },
        thursday: {
          id: "5fbaa2877e7eea1b1bec9306",
          title: "Killer HIIT CARDIO Workout"
        },
        friday: {
          id: "",
          title: ""
        },
      },
}

   theMonth() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var d = new Date();
    var n = month[d.getMonth()];
    return  n;
  }


  render() {
    return (
      <div>
      <h1 className="exercise-list-title">Calendar {this.theMonth()}</h1>
      <div className="calendar-container">
      

{/* DESKTOP VERSION */}


        <div className="desktop-show desktop-calendar-container">
          <table className="table table-bordered calendar-table">
            <thead>
            <tr className="calendar-week">
                <td colspan="7">Week 1</td>
              </tr>
              <tr className="calendar-weekday">
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wednesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
                <th scope="col">Saturday</th>
                <th scope="col">Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="calendar-legs">Legs</td>
                <td className="calendar-arms">Arms</td>
                <td className="calendar-abs">Abs</td>
                <td className="calendar-cardio">Cardio</td>
                <td className="calendar-back">Back</td>
                <td className="calendar-weekend">Rest</td>
                <td className="calendar-weekend">Rest</td>
              </tr>
              <tr>
                <td>
                  <Link to={`/videos/${this.state.week1.monday.id}`} className="">
                  {this.state.week1.monday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week1.tuesday.id}`} className="">
                  {this.state.week1.tuesday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week1.wednesday.id}`} className="">
                  {this.state.week1.wednesday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week1.thursday.id}`} className="">
                  {this.state.week1.thursday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week1.friday.id}`} className="">
                  {this.state.week1.friday.title}
                  </Link>
                </td>
                <td>Take a walk outside</td>
                <td> Update your weight on your profile!</td>
              </tr>
            </tbody>
          </table>

          <table className="table table-bordered calendar-table">
            <thead>
            <tr className="calendar-week">
                <td colspan="7">Week 2</td>
              </tr>
              <tr className="calendar-weekday">
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wednesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
                <th scope="col">Saturday</th>
                <th scope="col">Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="calendar-legs">Legs</td>
                <td className="calendar-arms">Arms</td>
                <td className="calendar-abs">Abs</td>
                <td className="calendar-cardio">Cardio</td>
                <td className="calendar-back">Back</td>
                <td className="calendar-weekend">Rest</td>
                <td className="calendar-weekend">Rest</td>
              </tr>
              <tr>
                <td>
                  <Link to={`/videos/${this.state.week2.monday.id}`} className="">
                  {this.state.week2.monday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week2.tuesday.id}`} className="">
                  {this.state.week2.tuesday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week2.wednesday.id}`} className="">
                  {this.state.week2.wednesday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week2.thursday.id}`} className="">
                  {this.state.week2.thursday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week2.friday.id}`} className="">
                  {this.state.week2.friday.title}
                  </Link>
                </td>
                <td>Visit a park near by</td>
                <td> Update your weight on your profile! </td>
              </tr>
            </tbody>
          </table>

          <table className="table table-bordered calendar-table">
            <thead>
            <tr className="calendar-week">
                <td colspan="7">Week 3</td>
              </tr>
              <tr className="calendar-weekday">
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wednesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
                <th scope="col">Saturday</th>
                <th scope="col">Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="calendar-legs">Legs</td>
                <td className="calendar-arms">Arms</td>
                <td className="calendar-abs">Abs</td>
                <td className="calendar-cardio">Cardio</td>
                <td className="calendar-back">Back</td>
                <td className="calendar-weekend">Rest</td>
                <td className="calendar-weekend">Rest</td>
              </tr>
              <tr>
                <td>
                  <Link to={`/videos/${this.state.week3.monday.id}`} className="">
                  {this.state.week3.monday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week3.tuesday.id}`} className="">
                  {this.state.week3.tuesday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week3.wednesday.id}`} className="">
                  {this.state.week3.wednesday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week3.thursday.id}`} className="">
                  {this.state.week3.thursday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week3.friday.id}`} className="">
                  {this.state.week3.friday.title}
                  </Link>
                </td>
                <td>Don't use elevators today</td>
                <td> Update your weight on your profile!</td>
              </tr>
            </tbody>
          </table>

          <table className="table table-bordered calendar-table">
            <thead>
            <tr className="calendar-week">
                <td colspan="7">Week 4</td>
              </tr>
              <tr className="calendar-weekday">
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wednesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
                <th scope="col">Saturday</th>
                <th scope="col">Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="calendar-legs">Legs</td>
                <td className="calendar-arms">Arms</td>
                <td className="calendar-abs">Abs</td>
                <td className="calendar-cardio">Cardio</td>
                <td className="calendar-back">Back</td>
                <td className="calendar-weekend">Rest</td>
                <td className="calendar-weekend">Rest</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <Link to={`/videos/${this.state.week4.monday.id}`} className="">
                  {this.state.week4.monday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week4.tuesday.id}`} className="">
                  {this.state.week4.tuesday.title}
                  </Link>
                </td>
                <td>
                  {" "}
                  <Link to={`/videos/${this.state.week4.wednesday.id}`} className="">
                  {this.state.week4.wednesday.title}
                  </Link>
                </td>
                <td>
                  <Link to={`/videos/${this.state.week4.thursday.id}`} className="">
                  {this.state.week4.thursday.title}
                  </Link>
                </td>
                <td>
                  {" "}
                  <Link to={`/videos/${this.state.week4.friday.id}`} className="">
                  {this.state.week4.friday.title}
                  </Link>
                </td>
                <td>Eat something you love</td>
                <td> Update your weight on your profile!</td>
              </tr>
            </tbody>
          </table>
        </div>




{/* MOBILE VERSION */}


        <div className="accordion mobile-show" id="accordionExample">
          <div className="card faq-card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-center collapsed faq-title-text"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Week 1
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <table className="table table-bordered calendar-table">
                  <thead>
                    <tr className="calendar-legs">
                      <th scope="col">Monday: Legs</th>
                    </tr>
                    <tr>
                      <th scope="col">
                        <Link
                          to={`/videos/${this.state.week1.monday.id}`}
                          className="">
                          {this.state.week1.monday.title}
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="calendar-arms">Tuesday: Arms</td>
                    </tr>
                    <tr>
                      <th scope="col">
                        <Link
                          to={`/videos/${this.state.week1.tuesday.id}`}
                          className="">
                          {this.state.week1.tuesday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-abs">Wednesday: Abs</td>
                      </tr>
                      <tr>  
                      <th>
                        <Link to={`/videos/${this.state.week1.wednesday.id}`} className="">
                        {this.state.week1.wednesday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-cardio">Thursday: Cardio</td>
                      </tr>
                      <tr>
                      <th>
                        <Link to={`/videos/${this.state.week1.thursday.id}`} className="">
                        {this.state.week1.thursday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-back">Friday: Back</td>
                      </tr><tr>
                      <th>
                        <Link to={`/videos/${this.state.week1.friday.id}`} className="">
                        {this.state.week1.friday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-weekend">Weekend: Rest</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card faq-card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-center collapsed faq-title-text"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Week 2
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
              <table className="table table-bordered calendar-table">
                  <thead>
                    <tr className="calendar-legs">
                      <th scope="col">Monday: Legs</th>
                    </tr>
                    <tr>
                      <th scope="col">
                        <Link
                          to={`/videos/${this.state.week2.monday.id}`}
                          className="">
                          {this.state.week2.monday.title}
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="calendar-arms">Tuesday: Arms</td>
                    </tr>
                    <tr>
                      <th scope="col">
                        <Link
                          to={`/videos/${this.state.week2.tuesday.id}`}
                          className="">
                          {this.state.week2.tuesday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-abs">Wednesday: Abs</td>
                      </tr>
                      <tr>  
                      <th>
                        <Link to={`/videos/${this.state.week2.wednesday.id}`} className="">
                        {this.state.week2.wednesday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-cardio">Thursday: Cardio</td>
                      </tr>
                      <tr>
                      <th>
                        <Link to={`/videos/${this.state.week2.thursday.id}`} className="">
                        {this.state.week2.thursday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-back">Friday: Back</td>
                      </tr><tr>
                      <th>
                        <Link to={`/videos/${this.state.week2.friday.id}`} className="">
                        {this.state.week2.friday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-weekend">Weekend: Rest</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card faq-card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-center collapsed faq-title-text"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Week 3
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
              <table className="table table-bordered calendar-table">
                  <thead>
                    <tr className="calendar-legs">
                      <th scope="col">Monday: Legs</th>
                    </tr>
                    <tr>
                      <th scope="col">
                        <Link
                          to={`/videos/${this.state.week3.monday.id}`}
                          className="">
                          {this.state.week3.monday.title}
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="calendar-arms">Tuesday: Arms</td>
                    </tr>
                    <tr>
                      <th scope="col">
                        <Link
                          to={`/videos/${this.state.week3.tuesday.id}`}
                          className="">
                          {this.state.week3.tuesday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-abs">Wednesday: Abs</td>
                      </tr>
                      <tr>  
                      <th>
                        <Link to={`/videos/${this.state.week3.wednesday.id}`} className="">
                        {this.state.week3.wednesday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-cardio">Thursday: Cardio</td>
                      </tr>
                      <tr>
                      <th>
                        <Link to={`/videos/${this.state.week3.thursday.id}`} className="">
                        {this.state.week3.thursday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-back">Friday: Back</td>
                      </tr><tr>
                      <th>
                        <Link to={`/videos/${this.state.week3.friday.id}`} className="">
                        {this.state.week3.friday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-weekend">Weekend: Rest</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card faq-card">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-center collapsed faq-title-text"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Week 4
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
              <table className="table table-bordered calendar-table">
                  <thead>
                    <tr className="calendar-legs">
                      <th scope="col">Monday: Legs</th>
                    </tr>
                    <tr>
                      <th scope="col">
                        <Link
                          to={`/videos/${this.state.week4.monday.id}`}
                          className="">
                          {this.state.week4.monday.title}
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="calendar-arms">Tuesday: Arms</td>
                    </tr>
                    <tr>
                      <th scope="col">
                        <Link
                          to={`/videos/${this.state.week4.tuesday.id}`}
                          className="">
                          {this.state.week4.tuesday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-abs">Wednesday: Abs</td>
                      </tr>
                      <tr>  
                      <th>
                        <Link to={`/videos/${this.state.week4.wednesday.id}`} className="">
                        {this.state.week4.wednesday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-cardio">Thursday: Cardio</td>
                      </tr>
                      <tr>
                      <th>
                        <Link to={`/videos/${this.state.week4.thursday.id}`} className="">
                        {this.state.week4.thursday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-back">Friday: Back</td>
                      </tr><tr>
                      <th>
                        <Link to={`/videos/${this.state.week4.friday.id}`} className="">
                        {this.state.week4.friday.title}
                        </Link>
                      </th>
                    </tr>
                    <tr>
                      <td className="calendar-weekend">Weekend: Rest</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Calendar;
