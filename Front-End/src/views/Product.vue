<template>
  <div class="fixed mt-24 w-full ">
    <div class=" pl-28 flex justify-center space-x-28">
        <router-link to="/product">
          <base-button buttonLabel="VIEW PRODUCTS" buttonColor="bg-pkras"></base-button>
        </router-link> 
        <router-link to="/product">
          <base-button @click="toggleAddProduct" buttonLabel="ADD PRODUCTS" buttonColor="bg-pkras"></base-button>
        </router-link>

      <div class="z-30">
        <add-product v-if="showAddProductModal" @save-product="addNewProduct" @close="toggleAddProduct"></add-product>
      </div>
    </div>

    <div class="flex justify-center my-6">
        <div v-for="product in product " :key="product.id" class="grid grid-cols-2">
          <product-block
            :productName="product.productName"
            :brand="product.brand"
            :productType="product.productType"
            :productPrice="product.productDetail"
            :productSize="product.productSize"
            :productDate="product.productDate"
            :productDetail="product.productDetail"
            :imageupload="product.productImg" 
            @edit-click="openEditModal"
            @delete-click="deleteProduct(product.id)">
          </product-block>
        </div>

    </div>
  </div>

  <add-product
    v-if="editClicked"
    @close="changeEditProductClicked"
    :imageDb="currentProduct.productImg"
    :productName="currentProduct.productName" 
    :productType="currentProduct.productType"
    :productPrice="currentProduct.productPrice"
    :productSize="currentProduct.productSize"
    :productDate="currentProduct.productDate"
    :productDetail="currentProduct.productDetail"
    :brand="currentProduct.brand"
    :color="currentProduct.color"
    @save-product="editProduct"
  >
  </add-product>

  <!-- <footer class="bg-black mt-12">
     <div class="container flex flex-col justify-center p-6 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
      <div class="flex flex-row justify-center space-x-4 mt-6 -mb-6 text-left md:pl-20 md:mt-0 ">
        <div class="w-full px-2 pl-0 lg:w-1/4 md:w-1/2">
            <h1 class="mb-3 text-lg font-bold tracking-widest text-white uppercase title-font">Products
            </h1>
            <nav class="mb-8 list-none">
              <li>
                <p class="text-sm text-white">Nike Sneaker</p>
              </li>
              <li>
                <p class="text-sm mt-2 text-white">Adidas Sneaker</p>
              </li>
              <li>
                <p class="text-sm mt-2 text-white">NB Sneaker</p>
              </li>
            </nav>
        </div>
        <div class="w-full px-4 lg:w-1/4 md:w-1/2">
              <h1 class="mb-3 text-lg font-bold tracking-widest text-white  uppercase title-font">Collections
              </h1>
              <nav class="mb-8 list-none">
                <li>
                  <p class="text-sm text-white">Nike Air</p>
                </li>
                <li>
                  <p class="text-sm mt-2 text-white">Sperstar NMD</p>
                </li>
                <li>
                  <p class="text-sm mt-2 text-white">574</p>
                </li>
              </nav>
        </div>
        <div class="w-full px-2 pl-10 lg:w-1/4 md:w-1/2">
            <h1 class="mb-3 text-lg font-bold tracking-widest text-white uppercase title-font">Support
            </h1>
            <nav class="mb-8 list-none">
              <li>
                <p class="text-sm text-white">Nike</p>
              </li>
              <li>
                <p class="text-sm mt-2 text-white">Adidas</p>
              </li>
              <li>
                <p class="text-sm mt-2 text-white">New Balance</p>
              </li>
            </nav>
        </div>
        <div class="w-full mt-16 pl-2 lg:w-1/4 md:w-1/2">
          <img class="w-24 h-12" alt="logofooter" src="../assets/logo.png" />
        </div>
      </div>
    </div>         
  </footer> -->

</template>

<script>
import AddProduct from '../components/AddProduct.vue';
import ProductBlock from '../components/ProductBlock.vue';
export default {
  props: ["addClicked"],
  components: {
    AddProduct,
    ProductBlock
  },
  data(){
    return {
      url: "http://localhost:5000/product",
      product: [],
      currentProduct: [],
      showAddProductModal: false,
      editClicked: false
    };
  },
  methods: {
    changeEditProductClicked(value){
      this.editClicked = !value;
    },
    toggleAddProduct: function() {
      this.showAddProductModal = !this.showAddProductModal;
    },
    async fetchProduct(){
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },
    async addNewProduct(newProduct){
      try {
        const res = await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            productName: newProduct.productName,
            productType: newProduct.productType,
            productPrice: newProduct.productPrice,
            productSize: newProduct.productSize,
            productDate: newProduct.productDate,
            productDetail: newProduct.productDetail,
            brand: newProduct.brand,
            color: newProduct.color
          }),
        });
        const data = await res.json();
        this.products = [...this.products, data];
        this.currentProduct = this.product[this.product.length-1];
      } catch (error) {
        console.log(`Could not add ${error}`);
      }
      this.enteredProductName=''
      this.enteredProductType=''
      this.enteredProductPrice=''
      this.enteredProductSize=''
      this.enteredProductDate=''
      this.enteredProductDetail=''
      this.brand=''
      this.color=''
    },
    async deleteProduct(id) {
      const res = await fetch(`${this.url}/${id}`, {
        method: "DELETE",
      });
      res.status === 200 ? (this.product = this.product.filter((product) => product.id !== id))
      : alert("Error delete product");
      this.currentProduct = this.product[this.product.length - 1];
    },
    openEditModal(value) {
      this.editClicked = value;
    },
    async editProduct(editingProduct) {
      const res = await fetch(`${this.url}/${this.currentProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify({
          productName: editingProduct.productName,
          productType: editingProduct.productType,
          productPrice: editingProduct.productPrice,
          productSize: editingProduct.productSize,
          productDate: editingProduct.productDate,
          productDetail: editingProduct.productDetail,
          productImg: editingProduct.productImg,
          brand: editingProduct.brand,
          color: editingProduct.color
        }),
      });
      const data = await res.json();
      this.product = this.product.map((product) => 
        product.id === data.id
          ? {
              ...product,
              productName: data.productName,
              productType: data.productType,
              productPrice: data.productPrice,
              productSize: data.productSize,
              productDate: data.productDate,
              productDetail: data.productDetail,
              productImg: data.productImg,
              brand: data.brand,
              color: data.color
            }
          : product
        );
        this.productName = editingProduct.productName;
        this.productType = editingProduct.productType;
        this.productPrice = editingProduct.productPrice;
        this.productSize = editingProduct.productSize;
        this.productDate = editingProduct.productDate;
        this.productDetail = editingProduct.productDetail;
        this.productImg = editingProduct.productImg;
        this.brand = editingProduct.brand;
        this.color = editingProduct.color;
    },
  },
  async created() {
    this.product = await this.fetchProduct();
    this.currentProduct = await this.product[0];
  },
  
};
</script>
<style>
</style>