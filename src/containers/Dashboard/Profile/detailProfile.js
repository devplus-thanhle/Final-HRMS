import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfile } from "../../../shared/actions/profileAction";

const DetailProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch, id]);
  return <div>detailProfile</div>;
};

export default DetailProfile;
