/**
 * Created by leelddd on 7/4/2016.
 */

var DishModel = {

    id: "",
    name: "",
    price: "",
    resource: "",
    method: "",

    DishModel: function (id, name, price, resource, method) {
        ds = new Object();
        ds.id = id;
        ds.name = name;
        ds.price = price;
        ds.resource = resource;
        ds.method = method;
        return ds;
    }

};