<script>
    function handleSubmit() {
    // Perform form submission logic here
    console.log('Form submitted!');
    }
</script>

<h1>Welcome back!</h1>

<form    on:submit|preventDefault={handleSubmit}>
    <label for = "email">Email:</label>
    <input id="email"
    type="text"/>
    <label for = "password">Password:</label>
    <input id="password"
    type="text"/>
    <button type="submit">Log in</button>
</form>

<style>
form{
    display:grid;
    width: 60vw;
    max-width:500px;
    min-width:300px;
    margin:auto;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
}
</style>