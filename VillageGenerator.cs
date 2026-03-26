using UnityEngine;

public class VillageGenerator : MonoBehaviour
{
    public GameObject housePrefab;
    public int size = 5;
    public float spacing = 5f;

    void Start()
    {
        GenerateVillage();
    }

    void GenerateVillage()
    {
        for (int x = 0; x < size; x++)
        {
            for (int z = 0; z < size; z++)
            {
                Vector3 pos = new Vector3(x * spacing, 0, z * spacing);
                Instantiate(housePrefab, pos, Quaternion.identity);
            }
        }
    }
}
