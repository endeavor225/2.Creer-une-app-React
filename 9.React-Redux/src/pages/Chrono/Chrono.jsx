import { useSelector, useDispatch } from "react-redux";
import { reset, startChrono } from "../../features/chrono";

export default function Chrono() {
  const chrono = useSelector((state) => state.chrono);
  const dispatch = useDispatch();

  return (
    <div>
      <p className="text-2xl text-slate-100 mb-2">
        Valeur du chrono : {chrono.value}{" "}
      </p>

      <button
        onClick={() => dispatch(startChrono())}
        className="p-2 min-w-[125px] bg-slate-100 rounded"
      >
        Demarrer
      </button>

      <button
        onClick={() => dispatch(reset())}
        className="p-2 min-w-[125px] bg-slate-100 rounded ml-3"
      >
        Reset
      </button>
    </div>
  );
}
