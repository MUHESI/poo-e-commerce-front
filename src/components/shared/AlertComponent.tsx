import React from "react";
import Button from "../widgets/Button";
import CachedIcon from "@material-ui/icons/Cached";

interface IProps {
  message: string;
  fnAction: () => void;
  textBtn?: string;
}
export default function AlertComponent({ textBtn, message, fnAction }: IProps) {
  return (
    <div className={` mainCardHomeText`}>
      <div className='center margin-2'>{message}</div>
      <div className='center margin-2'>
        <Button
          styleBtn={"btnPrimaryCircle"}
          textBtn={textBtn || "Actualiser"}
          actionTo={() => fnAction()}
          iconRightBtn={<CachedIcon />}
        />
      </div>
    </div>
  );
}
