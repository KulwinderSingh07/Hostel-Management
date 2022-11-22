import Axios from "axios";
import { useEffect, useState } from "react";

const Menugetter = () => {
  document.body.style.backgroundColor = "#232B2B";
  const [menuarr, setmenuarr] = useState([]);
  const getmenu = async () => {
    const allmenu = await Axios.get("http://localhost:3001/messmenu");
    setmenuarr(allmenu.data.data);
    console.log(allmenu.data.data);
  };
  useEffect(() => {
    getmenu();
  }, []);
  return (
    <div className="leavehandler">
      {menuarr.map((value) => {
        return (
          <div className="allmenucards">
            <div className="menucarsheader">
              <div className="menucard">
                <div className="menuheading">{value.day}</div>

                <div className="menubody">
                  <div className="menudata">
                    <div className="menudatamorning">
                      <span>Breakfast:</span>
                      <span>{value.breakfast}</span>
                      <span> Timing:</span>
                      <span> {value.breakfasttiming}</span>
                    </div>
                    <div className="menudataevening">
                      <span>Lunch:</span>
                      <span>{value.lunch}</span>
                      <span> Timing:</span>
                      <span> {value.lunchtiming}</span>
                    </div>
                    <div className="menudatanight">
                      <span>Dinner:</span>
                      <span>{value.dinner}</span>
                      <span> Timing:</span>
                      <span> {value.dinnertiming}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menugetter;
