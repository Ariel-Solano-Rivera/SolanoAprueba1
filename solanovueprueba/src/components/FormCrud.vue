<template>
  
  <div>
  <h1>VUE CRUD - Solano Prueba 1</h1>
    <p v-if="productos.length ===0"> No hay productos </p>
    <ul v-else>
      <li v-for="item in productos" :key="item.id">
        Nombre: {{ item.nombre }} - Precio: {{ item.precio }} - Stock: {{ item.stock }}
      </li>
    </ul>
  </div>
</template>

<script>
import { collection, onSnapshot} from "firebase/firestore";
import { db } from "../firebase";

export default {
  data() {
    return {
      productos: []
    };
  },
  
  mounted() {
    onSnapshot(collection(db, "products"), (snapshot) => {
      this.productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log(this.productos);
    });
  }
};
</script>