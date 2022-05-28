import React from "react";
import { useHistory } from "react-router-dom";
import { AjouterModePaiement } from "../components/dialog/AjouterModePaiement";
import Button from "../components/widgets/Button";

export default function Actions() {
  const history = useHistory();
  return (
    <div className="">
      <AjouterModePaiement r="g" />
    </div>
  );
}

/**²
 * 
 
      <div>
        <Button
          textBtn="Create Category"
          //   iconLeftBtn={<MailOutlineIcon />}
          iconRightBtn=""
          styleBtn={"btnPrimary"}
          actionTo={() => history.push("/create-blog")}
        />
      </div>
      <div>
        <Button
          textBtn="Show Loading"
          //   iconLeftBtn={<MailOutlineIcon />}
          iconRightBtn=""
          styleBtn={"btnPrimary"}
          actionTo={() => history.push("/loading")}
        />
      </div>
      <div>
        <Button
          textBtn="Update profile"
          //   iconLeftBtn={<MailOutlineIcon />}
          iconRightBtn=""
          styleBtn={"btnPrimary"}
          actionTo={() => history.push("/update-profile")}
        />
      </div>
      <div>
        <Button
          textBtn="Forget password"
          //   iconLeftBtn={<MailOutlineIcon />}
          iconRightBtn=""
          styleBtn={"btnPrimary"}
          actionTo={() => history.push("/forget-password")}
        />
      </div>
      <div>
        <h3> dialog__hh </h3>

      </div>

 */
