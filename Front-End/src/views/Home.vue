<template>
  <div class="home">
    <img class="inset-x-0 pt-20 w-full" alt="group1" src="../assets/Group1.png">
  </div>

  <div class="flex justify-center mt-2">
    <img class="h-18 w-16" alt="scroll" src="../assets/scroll.png"  />
  </div>

  <div class="flex flex-wrap items-center mt-2 ml-6">
    <div class="flex flex-wrap w-1/3">
      <div class="w-full p-1 ">
        <img class="h-48 w-96" alt="adidas" src="../assets/adidas.png" />
      </div>
    </div>
    <div class="flex flex-wrap w-1/3">
      <div class="w-full p-1 ">
        <img class="h-48 w-96" alt="nike" src="../assets/nike.png" />
      </div>
    </div>
    <div class="flex flex-wrap w-1/3">
      <div class="w-full p-1 ">
        <img class="h-48 w-96" alt="nb" src="../assets/nb.png" />
      </div>
    </div>
  </div>

  <div class="flex justify-center mt-2">
    <img class="inset-x-0 pt-6 w-full" alt="group2" src="../assets/Group2.png"  />
  </div>

  <div class="flex justify-center mt-2">
    <p class="text-3xl text-gray-900 font-extrabold">RECOMMEND </p>
  </div>

  <div class="flex flex-wrap items-center mt-2 ml-1">
    <div class="flex flex-wrap w-1/4">
      <div class="w-full p-1 ">
        <base-block>
          <img class="py-8 p-2 rounded-t-md border-gray-200 bg-gray-200" src="../assets/Airmax-90-4.png" />
          <div class="text-left pl-2 p-2">
            <p class="text-lg text-gray-500 font-medium"> Nike Air Max 90 </p>
            <p class=" text-sm text-gray-500 font-normal"> 4600 THB </p>
          </div>
        </base-block>
      </div>
    </div>

    <div class="flex flex-wrap w-1/4">
      <div class=" w-full p-1 ">
        <base-block>
          <img class=" py-7 p-2 rounded-t-md border-gray-200 bg-gray-200" src="../assets/574-2.png" />
          <div class="text-left pl-2 p-2">
            <p class="text-lg text-gray-500 font-medium"> New Balance 574 </p>
            <p class=" text-sm text-gray-500 font-normal"> 2900 THB </p>
          </div>
        </base-block>
      </div>
    </div>

    <div class="flex flex-wrap w-1/4">
      <div class="w-full p-1 ">
        <base-block>
          <img class="py-6 p-2 rounded-t-md border-gray-200 bg-gray-200" src="../assets/Air-Flight.png" />
          <div class="text-left pl-2 p-2">
            <p class="text-lg text-gray-500 font-medium"> Nike Air Flight 89 </p>
            <p class=" text-sm text-gray-500 font-normal"> 6900 THB </p>
          </div>
        </base-block>
      </div>
    </div>

    <div class="flex flex-wrap w-1/4">
      <div class="w-full p-1 ">
        <base-block>
          <img class="py-10 p-2 rounded-t-md border-gray-200 bg-gray-200" src="../assets/NMDR1-1.png" />
          <div class="text-left pl-2 p-2">
            <p class="text-lg text-gray-500 font-medium"> Adidas NMD R1 </p>
            <p class=" text-sm text-gray-500 font-normal"> 4600 THB </p>
          </div>
        </base-block>
      </div>
    </div>
  </div>

  <footer class="bg-black mt-12">
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
  </footer>


</template>

<script>


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
