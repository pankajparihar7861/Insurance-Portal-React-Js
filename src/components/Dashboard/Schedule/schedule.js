import { useState, useEffect } from 'react'
// import { faUsers ,faPhone,faVideoCamera, faVideo} from '@fortawesome/free-solid-svg-icons';

export const Schedule = () => {

/*
    console.log(new Date()); --> Tue May 02 2023 11:14:44 GMT+0530 (India Standard Time)

    console.log(new Date().toISOString()); --> 2023-05-02T05:48:10.668Z 

    console.log(new Date().toISOString().substring(0, 10)); --> 2023-05-02 
*/

const [date, setDate] = useState(new Date().toISOString().substring(0, 10)); // 2023-05-05 

const [isActive, setIsActive] = useState(true);
const [activeButton, setActiveButton] = useState(0);
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const dayObj = {
    date: '',
    day: '',
};

   
const nextDate = [];

const nextDateHandler = () => {

    let d = date; // 2023-05-02
    dayObj.date = new Date(d).getDate(); // 2
    dayObj.day = daysOfWeek[new Date(d).getDay()]; // 3 hence Tuesday
    nextDate.push(dayObj);

    for (let i = 1; i <= 6; i++) {

        //date
        const next = new Date(new Date(d).getTime() + i * 24 * 60 * 60 * 1000);
        // console.log('Check-1', next); // next date from today in full string format

        const formattedDate = next.getDate();
        // console.log('Check-2', formattedDate); // next date in number format like 3,4,5

        //day
        const dayOfWk = daysOfWeek[next.getDay()]; // tue,wed,thur

        nextDate.push({ date: formattedDate, day: dayOfWk });
    }
}

nextDateHandler();

const dateHandler = (e) => {
    e.preventDefault();
    setDate(e.target.value);
    setActiveButton(0);
}

const handleClick = (index) => {
    setActiveButton(index);
    setIsActive(true);
    console.log(isActive);
    console.log(index);
}

const buttonStyle = {
    backgroundColor: isActive ? '#1BABDB' : 'white',
    color: isActive ? 'white' : '#1BABDB',
};

useEffect(() => { 
}, [activeButton])


const meetings = [
  { time: '10:00 AM', name: 'Meeting with John' },
  { time: '2:00 PM', name: 'Meeting with Jane' },
];

  return (
    
      <>
        <div class="row">
           <div class="card">
             <div class="card-body">
               <div class="row"> 

                  <h3 class="card-title d-flex"> 
                      <b>Today's Schedule </b>

                      <input className="input-field"
                          type="date"
                          name="date"
                          value={date}
                          onChange={dateHandler}
                          placeholder="Date and Time"
                      />
                  </h3>

                  <div class="row d-flex flex-nowrap scl-cal">
                      {
                          nextDate.map((data, key) => {
                              return (
                                      <div class= {key === activeButton ? "card-sc current" : 'card-sc' } 
                                       onClick={() => handleClick(key)}>
                                        <p class='card-text'> <span>{data.date}</span> <br/> {data.day} </p>
                                      </div>
                                      )
                          })
                      }
                  </div>

                  {
                    meetings.map(m => (
                        <div class="meeting">

                            <div class="details">
                              <div class="name"> <i class="bi bi-people"/> {m.name} </div>
                              <div class="time"> {m.time} </div>
                            </div>

                            <div class="icons">
                              <i class="bi bi-telephone meet-phone-icon" /> 
                               &nbsp;&nbsp;
                              <i class="bi bi-camera-video meet-video-icon" />
                            </div>

                       </div>
                    ))
                  }

                </div>
              </div>
           </div>
        </div>
     </>
  )
}





















































{/* <div class="row d-flex flex-nowrap scl-cal">

                      <div class="card-sc current">
                        <p class="card-text"><span>02</span> Mon</p>
                      </div>

                      <div class="card-sc">
                        <p class="card-text"><span>03</span> Tue</p>
                      </div>

                      <div class="card-sc">
                        <p class="card-text"><span>04</span> Wed</p>
                      </div>

                      <div class="card-sc">
                        <p class="card-text"><span>05</span> Thu</p>
                      </div>

                      <div class="card-sc">
                        <p class="card-text"><span>06</span> Fri</p>
                      </div>

                      <div class="card-sc">
                        <p class="card-text"><span>07</span> Sat</p>
                      </div>

                      <div class="card-sc">
                        <p class="card-text"><span>08</span> Sun</p>
                      </div>

                  </div>  */}

