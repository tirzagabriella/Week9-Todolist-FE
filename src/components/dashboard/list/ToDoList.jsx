import React from "react";
import Dropdown from "../dropdown/Dropdown";
import { useTranslation } from "react-i18next";

export default function ToDoList(props) {
  const { t, i18n } = useTranslation();

  return (
    <div className="center-container">
      <div className="flex items-center justify-between">
        <h1 className="header">{t("home.todolist")}</h1>
        <Dropdown
          filterStatus={props.filterStatus}
          setFilterStatus={props.setFilterStatus}
        />
      </div>
      <ul className="list">
        {props.todos.map((todo, id) => {
          return (
            <li key={id}>
              <label className="w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={(e) =>
                        props.toggleTodo(todo.id, e.target.checked)
                      }
                    />
                    <div>
                      <div className="max-w-52">{todo.title}</div>
                      <div className="max-w-52 text-xs opacity-50">
                        {todo.datetime}{" "}
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn"
                      onClick={() => props.editTodo(todo.id, todo.title)}
                    >
                      {t("home.edit")}
                    </button>
                    <button
                      className="btn btn-danger ml-2 bg-red-400"
                      onClick={() => props.deleteTodo(todo.id)}
                    >
                      {t("home.delete")}
                    </button>
                  </div>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
