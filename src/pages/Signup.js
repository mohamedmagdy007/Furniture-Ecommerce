import React from "react";
import Helmet from "../components/helmet/Helmet";
import styles from "../styles/Auth.module.css";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCrendential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const upploadTask = uploadBytesResumable(storageRef, file);
      const user = userCrendential.user;

      upploadTask.on(
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(upploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      setLoading(false);
      toast.success("Account created");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error("something went wrong");
    }
  };
  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col className="text-center">
                <h6 className="fw-bold">Loading.....</h6>
              </Col>
            ) : (
              <Col lg="6" className="m-auto  text-center">
                <h3 className="fw-bold fs-4 mb-3"> Signup</h3>
                <Form className={styles.auth__form} onSubmit={signup}>
                  <FormGroup className={styles.form__group}>
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className={styles.form__group}>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className={styles.form__group}>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className={styles.form__group}>
                    <input
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </FormGroup>
                  <button className={styles.auth__btn}>
                    Create an Account
                  </button>
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
