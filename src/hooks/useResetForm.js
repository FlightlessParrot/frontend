import { useEffect } from "react";

export default function useResetForm({ reset, setState }) {
  useEffect(
  
    () => {
      reset && setState("");
    },
      [reset]);
  }


export const useResetFormObject = ({ reset, setState, initialData }) => {
  useEffect(
    () => {
      reset && setState(initialData);
    },
      [reset])
};
