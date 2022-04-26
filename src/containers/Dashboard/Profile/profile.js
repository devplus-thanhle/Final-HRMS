import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfiles } from "../../../shared/actions/profileAction";
import ProfileTable from "./Components/tableProfile";

const Profile = () => {
  const dispatch = useDispatch();
  const { profiles } = useSelector((state) => state.profiles);

  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  return (
    <>
      <ProfileTable profiles={profiles} />
    </>
  );
};

export default Profile;
