<?php include("app/view/layout/header.inc.php"); ?>

	<div>
		<h2>Recherche de la ville à partir du code postal</h2>

		<form id="form_post" method="post" action="#"/>
			<table>
				<tr>
					<td><input name="code_postal" id="code_postal" type="text" placeholder="Entrez un code_postal" required/></td>
				</tr>
				<tr>
					<td>
						<input type="submit" value="Rechercher" /><input type="reset" value="Effacer" />
					</td>
				</tr>
			</table>
		</form>
		<label id="reponse"></label>
	</div>

<?php include("app/view/layout/footer.inc.php"); ?>