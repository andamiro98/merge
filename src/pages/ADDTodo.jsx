import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { __addTodoThunk } from "../redux/modules/todosSlice";
import AddCommentForm from "../components/AddCommentForm";

export const Formepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState();
  const goToListpage = () => {
    navigate("/todos");
  };
  const goToHomepage = () => {
    navigate("/");
  };
  const onSubmitHandler = (todo) => {
    dispatch(__addTodoThunk(todo));
    navigate("/todos");
  };

  return (
    <Stlayout>
      <Header />
      <form
        className="FORM-GROUP"
        onSubmit={(e) => {
          // ๐ submitํ์ ๋ ๋ธ๋ผ์ฐ์ ์ ์๋ก๊ณ ์นจ์ ๋ฐฉ์งํฉ๋๋ค. //ํฌ์คํธ๊ตฌ๋ฌธ ์ ๋ถ

          onSubmitHandler(todo);
          goToListpage(e);
        }}
      >
        <h1>์์ฑ์</h1>
        <input
          className="inpot"
          type="text"
          required
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              user: value,
            });
          }}
        />
        <h1>์ ๋ชฉ</h1>
        <input
          className="inpot"
          type="text"
          required
          title="์ ๋ชฉ์ 10๊ธ์์ด์์๋ ฅํ์ธ์"
          pattern=".{10,1000}"
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              title: value,
            });
          }}
        />
        <h1>๋ด์ฉ</h1>
        <textarea
          className="inpoot"
          cols="250"
          rows="10"
          type="text"
          required
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              body: value,
            });
          }}
        />
        <div>
          <button onClick={goToHomepage} className="buttons">
            ์ด์ ์ผ๋ก
          </button>
          <button
            disabled={todo?.body === "" ? true : false}
            className="buttons"
          >
            ์ถ๊ฐํ๊ธฐ
          </button>
        </div>
      </form>
    </Stlayout>
  );
};

export default Formepage;

const Stlayout = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-width: 800px;
`;
