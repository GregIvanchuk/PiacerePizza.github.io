import styles from "./OrdersForm.module.css";
import React from "react";
import { useState } from "react";
import FramedCart from "../FramedCart";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { clearItems } from "../../../Redux/cartSlice";
function OrdersForm({ openCart,itemsCart,setItemsCart,sum }) {
    let [onSub, setOnSub] = useState(false);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
    //     async function fetchData() {
    //   await axios.post("http://localhost:3001/users",ord);
    //   await  itemsCart.forEach((item) => {
    //      axios.delete(`http://localhost:3001/cart/${item.id}`);
    //     }});
        // let ord = {data,itemsCart,sum:sum}
        dispatch(clearItems())
        setOnSub(!onSub);
    // fetchData() 
    };
    return onSub ? (
        <FramedCart openCart={openCart} />
    ) : (
        <div className={styles.drawer}>
            <header className={styles.header}>
        <div className={styles.header_left}>
          <img src="/images/logo.png" alt="logo" />
          <div className={styles.title}>
          <h3>Piacere Pizza</h3>
          <span>тобі личить зайве</span>
          </div>
        </div>
        <div className={styles.header_rigth}>
        </div>
      </header>
            <div className={styles.cart_Items}>
                <div className={styles.form}>
                    <h3>Введіть необхідні дані:</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("firstName", { 
                                required: "Field is required",
                                minLength: 2,
                                maxLength: 20,
                            })}
                            name="firstName"
                            type="text"
                            placeholder=" Ім'я"
                        />
                        {errors.firstName && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.firstName.message}</p>}
                        <input
                            {...register("lastName", { 
                                required: "Field is required",
                                minLength: 2,
                                maxLength: 20,
                            })}
                            name="lastName"
                            type="text"
                            placeholder=" Прізвище"
                        />
                        {errors.lastName && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.lastName.message}</p>}
                        <input 
                            {...register("phoneNumber",{ 
                                required: "Field is required",
                            })}
                            name="phoneNumber"
                            type="tel"
                            placeholder=" Номер телефону"
                        />
                        {errors.phoneNumber && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.phoneNumber.message}</p>}
                        <input
                            {...register("city",{ 
                                required: "Field is required",
                                minLength: 2,
                                maxLength: 20,
                            })}
                            name="city"
                            type="text"
                            placeholder=" Місто"
                        />
                        {errors.city && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.city.message}</p>}
                        <input 
                            {...register("homeAdress",{ 
                                required: "Field is required",
                            })}
                            name="homeAdress"
                            type="text"
                            placeholder=" Домашня адреса"
                        />
                        {errors.homeAdress && <p style={{color:"red",height:'-20px',marginTop:"-15px",marginBottom:"-15px"}}>{errors.homeAdress.message}</p>}
                        <button className={styles.submit} type="submit">Submit</button>
                        <Link to="/"> <button className={styles.back} >Повернутися назад</button> </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default OrdersForm;
