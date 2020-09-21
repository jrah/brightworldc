<template>
  <div id="app">
    <vue-blob-json-csv
      tag-name="div"
      file-type="csv"
      file-name="output"
      title="Download JSON"
      :data="merge(oldArr, newArr)"
      confirm="Do you want to download it?"
    />
  </div>
</template>

<script>
import oldArr from "./input/old.json";
import newArr from "./input/new.json";

export default {
  name: "App",
  data() {
    return {
      obj: {},
      oldArr: oldArr,
      newArr: newArr,
    };
  },
  components: {
    // HelloWorld,
    // VueBlobJsonCsv,
  },
  methods: {
    simpleMerge(oldArr, newArr) {
      const AandB = [...oldArr, ...newArr];
      console.log(AandB); // [ 44, 33, 22, 33, 22, 11 ]
      const distinctValuesInAandBSet = new Set(AandB);
      console.log(distinctValuesInAandBSet); // Set { 44, 33, 22, 11 }
      const setToArray = [...distinctValuesInAandBSet];
      return setToArray;
    },
    merge(oldArr, newArr) {
      const mergedArr = [...oldArr, ...newArr];
      let set = new Set();
      let unionArr = mergedArr.filter((item) => {
        if (!set.has(item.uid)) {
          set.add(item.uid);
          return true;
        }
        return false;
      }, set);
      return unionArr;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
