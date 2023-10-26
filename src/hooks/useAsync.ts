import { useReducer } from "react";
// import toast from "react-hot-toast";
// import * as Sentry from "@sentry/nextjs";
type State<T> = {
  loading: boolean;
  error: any;
  value: T | null;
};

type Action<T> =
  | { type: "start" }
  | { type: "finish"; value: T }
  | { type: "error"; error: any };

const initialState: State<any> = { loading: false, error: null, value: null };

const stateReducer = <T>(_: State<T>, action: Action<T>): State<T> => {
  switch (action.type) {
    case "start":
      return { loading: true, error: null, value: null };
    case "finish":
      return { loading: false, error: null, value: action.value };
    case "error":
      return { loading: false, error: action.error, value: null };
    default:
      return _;
  }
};

//HACK use this hook for post, put, delete actions
const useAsync = <U extends any[], T>(
  fn: (...args: U) => Promise<T>,
  errorMessage?: string,
  onError?: () => void
) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const run = async (...args: U) => {
    try {
      dispatch({ type: "start" });
      // await new Promise((resolve) => setTimeout(resolve, 3000));
      const value = await fn(...args);
      dispatch({ type: "finish", value });
      return value;
    } catch (error: any) {
      if (errorMessage || error?.response?.data?.message)
        if (onError)
          // toast.error(errorMessage || error?.response?.data?.message);
          onError();

      dispatch({ type: "error", error });
    }
  };

  return { ...state, run };
};

export default useAsync;
