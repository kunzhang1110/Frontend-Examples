import React from "react";
import { Card, CardBody, Navbar } from "reactstrap";
import { Link, Routes, Route } from "react-router-dom";
import { ClassComponentExample } from "./basics/ClassComponentExample";
import { UseCallbackExample } from "./hooks/UseCallbackExample";
import { UseContextExample } from "./hooks/UseContextExample";
import { UseEffectExample } from "./hooks/UseEffectExample";
import { UseMemoCalculationExample } from "./hooks/UseMemoCalculationExample";
import { UseMemoComponentExample } from "./hooks/UseMemoComponentExample";
import { UseRefExample } from "./hooks/UseRefExample";
import { UseReducerExample } from "./hooks/UseReducerExample";
import { ReduxExample } from "./redux/ReduxExample";
import { ReduxSagaExample } from "./redux/ReduxSagaExample";
import { ReduxThunkExample } from "./redux/ReduxThunkExample";
import { FormExample } from "./basics/FormExample";
import { AuthExample } from "./auth/AuthExample";
import { ForwardRefExample } from "./APIs/ForwardRefExample";
import { ForwardRefUseImperativeHandleExample } from "./APIs/ForwardRefUseImperativeHandleExample";
import { CreateAsyncThunkExample } from "./redux/CreateAsyncThunkExample";
import { FuncComponentLifeCycleExp } from "./basics/FuncComponentLifeCycleExp";
import { ChildrenComponentExp } from "./basics/ChildrenComponentExp";
import { StateCrudExp } from "./basics/StateCrudExp";

export const App = () => (
  <div>
    <Navbar
      className="navbar-expand-sm navbar-toggleable-sm  ng-white border-bottom box-shadow mb-3 "
      dark
      container
    >
      <Link to="./">Home</Link>
    </Navbar>
    <div className="d-flex flex-column align-items-center justify-content-center p-2">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/ClassComponentExample"
          element={<ClassComponentExample />}
        />
        <Route
          path="/FuncComponentLifeCycleExp"
          element={<FuncComponentLifeCycleExp />}
        />
        <Route
          path="/ChildrenComponentExp"
          element={<ChildrenComponentExp />}
        />
        <Route path="/StateCrudExp" element={<StateCrudExp />} />
        <Route path="/FormExample" element={<FormExample />} />
        <Route path="/UseCallbackExample" element={<UseCallbackExample />} />
        <Route path="/UseContextExample" element={<UseContextExample />} />
        <Route path="/UseEffectExample" element={<UseEffectExample />} />
        <Route
          path="/UseMemoCalculationExample"
          element={<UseMemoCalculationExample />}
        />
        <Route
          path="/UseMemoComponentExample"
          element={<UseMemoComponentExample />}
        />
        <Route path="/UseReducerExample" element={<UseReducerExample />} />
        <Route path="/UseRefExample" element={<UseRefExample />} />
        <Route path="/ForwardRefExample" element={<ForwardRefExample />} />
        <Route
          path="/ForwardRefUseImperativeHandleExample"
          element={<ForwardRefUseImperativeHandleExample />}
        />
        <Route path="/ReduxExample" element={<ReduxExample />} />
        <Route path="/ReduxThunkExample" element={<ReduxThunkExample />} />
        <Route path="/ReduxSagaExample" element={<ReduxSagaExample />} />
        <Route
          path="/CreateAsyncThunkExample"
          element={<CreateAsyncThunkExample />}
        />
        <Route path="/auth/*" element={<AuthExample />} />
      </Routes>
    </div>
  </div>
);

const Home = () => (
  <div className="text-center w-50">
    <h2>React Examples</h2>
    <Card className="mt-2">
      <h3>Basics</h3>
      <CardBody className="d-flex flex-column">
        <Link to="/ClassComponentExample">ClassComponent Example</Link>
        <Link to="/FuncComponentLifeCycleExp">
          Functional Component Life Cycle Example
        </Link>
        <Link to="/ChildrenComponentExp">Children Component Example</Link>
        <Link to="/FormExample">Form Example</Link>
        <Link to="/StateCrudExp">State CRUD Example</Link>
      </CardBody>
    </Card>
    <Card className="mt-2">
      <h3>React Hooks</h3>
      <CardBody className="d-flex flex-column">
        ChildrenComponentExp
        <Link to="/UseCallbackExample">useCallback Example</Link>
        <Link to="/UseContextExample">useContext Example</Link>
        <Link to="/UseEffectExample">useEffect Example</Link>
        <Link to="/UseMemoCalculationExample">UseMemo Calculation Example</Link>
        <Link to="/UseMemoComponentExample">UseMemo Component Example</Link>
        <Link to="/UseReducerExample">useReducer Example</Link>
        <Link to="/UseRefExample">useRef Example</Link>
      </CardBody>
    </Card>
    <Card className="mt-2">
      <h3>React APIs</h3>
      <CardBody className="d-flex flex-column">
        <Link to="/ForwardRefExample">ForwardRef Example</Link>
        <Link to="/ForwardRefUseImperativeHandleExample">
          ForwardRef with UseImperativeHandle Example
        </Link>
      </CardBody>
    </Card>
    <Card className="mt-2">
      <h3>Redux</h3>
      <CardBody className="d-flex flex-column">
        <Link to="/ReduxExample">Redux Example</Link>
        <Link to="/ReduxThunkExample">Redux Thunk Example</Link>
        <Link to="/ReduxSagaExample">Redux Saga Example</Link>
        <Link to="/CreateAsyncThunkExample">createAsyncThunk Example</Link>
      </CardBody>
    </Card>
    <Card>
      <h3>Authentication and Authorization</h3>
      <CardBody className="d-flex flex-column">
        <Link to="/auth">Auth Example</Link>
      </CardBody>
    </Card>
  </div>
);
