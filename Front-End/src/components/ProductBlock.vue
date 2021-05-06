<template>
    <div>
        <div class="flex flex-row border space-x-8 border-gray-50 rounded-md shadow p-2 my-1">
            <div>
                <img :src="imageUpload" class=" border-2 border-black object-cover w-36 h-36 ml-2 my-2" />
                <p class="font-medium text-lg">{{ "Color: " + color }} </p>
            </div>

            <div class="w-full text-left">
                <p class="font-medium text-lg">{{ "Name: " + productName }} </p>
                <p class="font-medium text-lg">{{ "Brand: " + brand }} </p>
                <p class="font-medium text-lg">{{ "Type: " + productType }} </p>
                <p class="font-medium text-lg">{{ "Detail: " + productDetail }} </p>
                <p class="font-medium text-lg">{{ "Price: " + productPrice + "THB" }} </p>
                <p class="font-medium text-lg">{{ "Size: " + productSize }} </p>
                <p class="font-medium text-lg">{{ "Date: " + productDate }} </p>
                <div class="bottom-0 right-0">
                    <button class="bg-green-500 py-1 px-3 rounded-md text-white" @click="editButtonClick">
                        Edit
                    </button>
                    <button class="bg-red-500 py-1 px-3 mx-2 rounded-md text-white" @click="deleteButtonClick">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  emits: ["delete-click",'edit-click'],
  props: ["imageUpload", "productName", "brand", "productType", "productDetail", "productPrice", "productSize", "productDate"],
  methods: {
    deleteButtonClick() {
      this.$emit("delete-click", true);
    },
    editButtonClick() {
      this.$emit("edit-click", true);
    }
  },
};
</script> 