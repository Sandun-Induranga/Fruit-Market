import axios from "axios";

class CustomerService {
  postCustomer = async (data: any) => {
    const promise = new Promise((resolve, reject) => {
      axios
        .post("http://localhost:8080/fresh/customer", data)
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return resolve(err);
        });
    });
    return await promise;
  };
}
export default new CustomerService();
