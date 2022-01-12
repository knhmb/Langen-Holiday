<template>
  <the-header></the-header>
  <base-container>
    <section class="TC">
      <h1>Terms and Conditions</h1>
      <el-card class="box-card">
        <el-scrollbar height="300px">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            ducimus quis deleniti, commodi sed, possimus quasi unde vero
            asperiores quibusdam quae esse? Quo laborum consectetur cupiditate
            enim dicta doloremque illo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            perspiciatis. Distinctio asperiores provident, quasi non
            voluptatibus facilis possimus saepe nam similique facere delectus?
            Eveniet nam pariatur, consequuntur fuga vero saepe.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            aliquid aperiam impedit commodi, cumque aspernatur! Suscipit impedit
            esse voluptatibus repellendus vitae, delectus nobis perspiciatis,
            nihil quaerat ducimus iusto harum quae! Officia suscipit dolore
            dolorem animi rerum ea consectetur facere blanditiis quisquam aut
            nam numquam, iure quis sequi iste ad similique totam aperiam.
            Quibusdam ratione hic autem, nobis doloribus accusamus nisi.
            Voluptatibus unde doloremque tenetur, explicabo iure nihil eos quia,
            ad magnam voluptates exercitationem! Incidunt alias necessitatibus
            voluptatem natus ex quos deleniti commodi tempore iure eligendi.
            Sapiente impedit voluptatibus possimus magnam! Soluta minus, nobis
            voluptate perspiciatis dicta asperiores at? Blanditiis, deserunt in
            optio impedit, ad delectus commodi sunt voluptas facere nemo,
            placeat ducimus debitis quam praesentium architecto maxime!
            Inventore, similique maxime. Iste consequuntur totam autem, quas
            minima impedit facilis possimus, sequi, in vero maxime cum molestias
            quis ipsa laudantium commodi exercitationem rerum debitis reiciendis
            ratione praesentium adipisci molestiae dolorum repellat. Dolores.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            sint voluptatibus delectus veritatis facilis a nihil eveniet ipsam
            eius vero numquam blanditiis illo autem, expedita placeat labore
            molestiae pariatur ea! Blanditiis consequuntur sint aperiam. Odio
            harum temporibus impedit nesciunt magnam corporis numquam. Eaque
            blanditiis nostrum, quos quidem, beatae exercitationem non vel harum
            accusamus doloribus assumenda et deserunt fugit consectetur
            aspernatur. Aperiam labore expedita voluptatibus, sint iure
            consectetur ducimus aspernatur saepe velit tempore, reiciendis ex?
            In officiis, quis delectus aspernatur dicta eaque harum ad hic,
            voluptatem, corporis fuga odit qui doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            veritatis consequuntur optio provident, sapiente harum itaque culpa
            recusandae odio illo quos, perspiciatis doloribus cum reiciendis
            omnis quod! Iure, quibusdam repellat!
          </p>
        </el-scrollbar>
        <img src="../assets/icon-cs.png" alt="" />
      </el-card>
    </section>
  </base-container>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../components/header/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
.TC {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  position: relative;
  color: #999;
}

.TC h1 {
  margin-bottom: 1.5rem;
}

.TC p {
  color: #999;
  margin-bottom: 1rem;
  font-size: 14px;
}

.TC .el-scrollbar .el-scrollbar__thumb {
  background-color: orange;
  opacity: 1;
}

.TC .box-card {
  padding-bottom: 1rem;
}

.TC .el-card img {
  width: 50px;
  position: absolute;
  right: 0;
  bottom: -20px;
}
</style>