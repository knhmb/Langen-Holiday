<template>
  <base-container>
    <div class="booking-alert">
      <h2>Alert</h2>
      <el-alert type="warning" :closable="false">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
          repudiandae? Ratione, provident voluptas itaque voluptatem ea ad
          commodi similique maxime vel ex voluptates perspiciatis aliquid sunt
          quibusdam et ipsa illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          distinctio nulla atque minima eum, vitae nisi ab suscipit id nam
          explicabo dicta minus fugiat qui necessitatibus fugit aperiam saepe
          est?
        </p>
        <p>Lorem ipsum dolor sit.</p>
      </el-alert>
    </div>
  </base-container>
</template>

<style>
.booking-alert {
  margin-top: 2rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 1rem;
}

.booking-alert h2 {
  color: orange;
  margin-bottom: 1.5rem;
}

.booking-alert p {
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, 0.624);
}

.booking-alert .el-alert {
  border-radius: 0;
  padding-bottom: 1.5rem;
}
</style>