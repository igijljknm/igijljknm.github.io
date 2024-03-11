<script>
    function handleSubmit() {
    // Perform form submission logic here
    console.log('Form submitted!');
    }

    let firstName = '';
    let lastName = '';
</script>
<h1>Hello {firstName+' '+lastName}!</h1>

<h1>Registration Form</h1>

<form    on:submit|preventDefault={handleSubmit}>
    <label for = "firstName">First Name:</label>
    <input  bind:value={firstName} id="firstName"
    type="text"/>
    <label for = "lastName">Last Name:</label>
    <input bind:value ={lastName} id="lastName"
    type="text"/>
    <label for = "email">Email:</label>
    <input id="email"
    type="text"/>
    <label for = "password">Password:</label>
    <input id="password"
    type="text"/>
    <button type="submit">Register</button>
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

<p>Have an account? <a

    href="/login">Log in</a>></p>