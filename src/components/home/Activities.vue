<template>
  <section class="activities">
    <base-container>
      <h1>Activites</h1>
      <el-row :gutter="30">
        <el-col :sm="24" :md="12" :lg="8">
          <div class="card">
            <div class="card-img">
              <img
                src="https://media.istockphoto.com/photos/tropical-beach-background-picture-id1145474071?k=20&m=1145474071&s=612x612&w=0&h=toGQ0gUXiWY_80bra65p56ZMLJty17qMdwcFnenQKEk="
                alt=""
              />
            </div>
            <div class="card-text">
              <p>Join Us</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <div class="card">
            <div class="card-img">
              <img
                src="https://media.istockphoto.com/photos/tropical-beach-background-picture-id1145474071?k=20&m=1145474071&s=612x612&w=0&h=toGQ0gUXiWY_80bra65p56ZMLJty17qMdwcFnenQKEk="
                alt=""
              />
            </div>
            <div class="card-text">
              <p>Join Us</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <div class="card">
            <div class="card-img">
              <img
                src="https://media.istockphoto.com/photos/tropical-beach-background-picture-id1145474071?k=20&m=1145474071&s=612x612&w=0&h=toGQ0gUXiWY_80bra65p56ZMLJty17qMdwcFnenQKEk="
                alt=""
              />
            </div>
            <div class="card-text">
              <p>Join Us</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <div class="card">
            <div class="card-img">
              <img
                src="https://media.istockphoto.com/photos/tropical-beach-background-picture-id1145474071?k=20&m=1145474071&s=612x612&w=0&h=toGQ0gUXiWY_80bra65p56ZMLJty17qMdwcFnenQKEk="
                alt=""
              />
            </div>
            <div class="card-text">
              <p>Join Us</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <div class="card">
            <div class="card-img">
              <img
                src="https://media.istockphoto.com/photos/tropical-beach-background-picture-id1145474071?k=20&m=1145474071&s=612x612&w=0&h=toGQ0gUXiWY_80bra65p56ZMLJty17qMdwcFnenQKEk="
                alt=""
              />
            </div>
            <div class="card-text">
              <p>Join Us</p>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <div class="card">
            <div class="card-img">
              <img
                src="https://media.istockphoto.com/photos/tropical-beach-background-picture-id1145474071?k=20&m=1145474071&s=612x612&w=0&h=toGQ0gUXiWY_80bra65p56ZMLJty17qMdwcFnenQKEk="
                alt=""
              />
            </div>
            <div class="card-text">
              <p>Join Us</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </base-container>
  </section>
</template>

<style scoped>
.activities {
  background-image: url("../../assets/main-bg2.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 6rem;
  padding-bottom: 3rem;
  margin-top: -8.9rem;
}

.activities h1 {
  text-align: center;
  margin: 0;
  font-size: 2rem;
  color: orange;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  /* display: inline-block; */
  margin-bottom: 4rem;
}

.activities .el-col {
  margin-bottom: 3rem;
}

.activities .card {
  border-radius: 4px;
  /* margin-bottom: 3rem; */
  box-shadow: 0px 0px 3px 0px grey;
}

.activities .card .card-img {
  border-radius: 4px 4px 0 0;
  /* height: 300px; */
  /* width: 100%;/ */
}

.activities .card .card-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: inherit;
}

.activities .card-text {
  background-color: #ffd800;
  margin-top: -5px;
  padding: 0.5rem 0;
  border-radius: 0 0 4px 4px;
}

.activities .card-text p {
  color: #fff;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .activities {
    margin-top: -6.9rem;
  }
}
</style>