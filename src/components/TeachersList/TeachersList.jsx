import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../redux/teachers/teachers-operations";
import { selectTeachers } from "../../redux/teachers/teachers-selectors";
import TeacherItem from "../TeacherItem/TacherItem";
import { List, NoFoundTxt } from "./TeacherList.styled";

const TeachersList = () => {
  const { teachers } = useSelector(selectTeachers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers()).catch((error) => {
      console.error("Error fetching teachers:", error);
    });
  }, [dispatch]);

  return (
    <>
      <List>
        {teachers?.length !== 0 ? (
          teachers.map((item, index) => <TeacherItem key={index} item={item} />)
        ) : (
          <NoFoundTxt>No teachers found matching your criteria</NoFoundTxt>
        )}
      </List>
    </>
  );
};

export default TeachersList;