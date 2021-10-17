<template>
    <div class=" d-flex justify-content-center align-items-center box" >
        <img :data-src="src" class="lazy-img">
        <span class="position-absolute d-none delete-item">
            <div >
                <div class="d-flex justify-content-center align-items-center">
                    <b-icon icon="trash" variant="dark" font-scale="2"></b-icon> 
                </div>
                <div class="font16 text-dark fw-bold">Eliminar</div>
            </div>
        </span>
    </div>
</template>
<script>
export default {

    props : {
        src : String
    }
}
</script>
