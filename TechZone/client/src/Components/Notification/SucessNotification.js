import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearSuccessMessage } from "../../JS/Actions/messages";
import { clearSuccessOrder } from "../../JS/Actions/order";
import { clearSuccessA} from "../../JS/Actions/admin";

import { clearSuccess1 } from "../../JS/Actions/product";
import { clearSuccess } from "../../JS/Actions/user";

const SucessNotification = ({ success }) => {
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setshow(false);
      dispatch(clearSuccess1());
      dispatch(clearSuccessA());

      dispatch(clearSuccessMessage());
      dispatch(clearSuccess());
      dispatch(clearSuccessOrder());
    }, 6000);
  }, [show, dispatch]);

  return (
    <div>
      <div>
        {show && (
          <div>
            {toast.success(success.msg)}
            <ToastContainer
              theme="colored"
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              pauseOnHover
              draggable
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SucessNotification;
